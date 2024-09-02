import { initializeApp } from "firebase/app";
import {collection, CollectionReference, doc, getDoc, getFirestore, setDoc, updateDoc, connectFirestoreEmulator} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

import React, {useState} from 'react'
import Disclaimer from "./Disclaimer"
import MadeByMe from "./MadeByMe";
import TopBanner from "./TopBanner";
import Example from "./Example";
import {data} from "./data/data";


type DataType = {
    name: string,
    answers: ("yes" | "no" | "wrong")[],
    i: number,
    dataset: string[],
    //isWrong: (true | false)[],
    timeDiffs: number[],
    //models: string[],
    date: Date
}

const firebaseConfig = {
  apiKey: "AIzaSyC4ucBLoaMpGMRfLh8q-cxPBGQIcq4MIz0",
  authDomain: "semagram-gpt.firebaseapp.com",
  projectId: "semagram-gpt",
  storageBucket: "semagram-gpt.appspot.com",
  messagingSenderId: "174798440592",
  appId: "1:174798440592:web:ef74cfc206a4f3168bb015",
  measurementId: "G-ZK9LP9L4M9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firstore = getFirestore(app);
const col = collection(firstore, "semagram") as CollectionReference<DataType>;


function App() {

    const [name, setName] = useState("");
    const [ready, setReady] = useState(false);
    const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);
    const [exampleSeen, setExampleSeen] = useState(false);
    const [dataset, setDataset] = useState<string[] | null>([]);
    const [i, setI] = useState(0);
    const [answers, setAnswers] = useState<("yes" | "no" | "wrong")[]>([]);
    //  const [isWrong, setIsWrong] = useState<(true | false)[]>([]);
    // const [models, setModels] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isDownloaded, setIsDownloaded] = useState(false);
    const [timeBetweenQuestionsStart, setTimeBetweenQuestionsStart] = useState(new Date());
    const [timeDiffs, setTimeDiffs] = useState<number[]>([]);

    const dataSets: any = {
        1: data, // keep this here if we want more datasets
        default: data
    };

    const calculateTimeDifference = (startTime: Date, endTime: Date) => {
        // Return the time passed in seconds
        return (endTime.getTime() - startTime.getTime()) / 1000;
    }

    const recoverData = (secondName: string) => {
        // Recover and save the data to a json file
        const docRef = doc(col, secondName);
        getDoc(docRef).then((doc) => {
            if (!doc.exists()) {
                console.log("No such document!");
            } else {
                // Download data as JSON file
                const data = doc.data();
                const json = JSON.stringify(data);
                const blob = new Blob([json], {type: "application/json"});
                const href = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = href;
                link.download = secondName + ".json";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        });
    }

    const updateProgressBar = (ivalue: number, len: number) => {
        const progress = document.getElementById("progress-bar");
        if (progress && dataset) {
            progress.style.width = `${(ivalue + 1) / len * 100}%`;
        }
    }

    const onClick = (answer: ("yes" | "no" | "wrong")) => {
        const newAnswers = [...answers, answer];
        setAnswers(newAnswers);
        next(newAnswers);
    }

    const handleStart = async (event: any) => {
        if (event.key === 'Enter' || event.type === 'click') {
            if (name.length === 0) {
                return alert("Please enter your name");
            }
            const tempName = name.toLowerCase().trim();
            setName(tempName); // This is lazy so just for this time we are going to assign tempName anywhere

            if (tempName.startsWith("admin")) {
                // Recover data of the name after "admin" and a space
                const secondName = tempName.substring(6);
                recoverData(secondName);
                return;
            }

            setDataset(dataSets[tempName] || dataSets.default);
            const docRef = doc(col, tempName);
            await getDoc(docRef).then((doc) => {
                if (doc.exists()) {
                    // If the user has already answered questions, get data from firebase
                    const data = doc.data();
                    if (data?.dataset && data?.i >= data?.dataset.length) {
                        alert("Thank you for your participation, you already completed the task!");
                    } else {
                        if (data) {
                            updateProgressBar(data.i, data.dataset.length);
                            setAnswers(data.answers);
                            setTimeDiffs(data.timeDiffs);
                            setI(data.i);
                            // setIsWrong(data.isWrong);
                            // setModels(data.models);
                            setReady(true);
                        }
                    }
                } else {
                    // This is a new user
                    setReady(true);
                }
            });
        }
        setTimeBetweenQuestionsStart(new Date());
    }

    const next = async (newAnswers: ("yes" | "no" | "wrong")[]) => {
        if (!isLoading) {
            setIsLoading(true);
            const timeDiff = calculateTimeDifference(timeBetweenQuestionsStart, new Date())

            // const checkbox = document.getElementById("hard-checkbox") as HTMLInputElement;
            if (dataset) {
                updateProgressBar(i, dataset.length);
                setIsDownloaded(true);
            }

            if (dataset && i < dataset.length) {
                // Check if the checkbox is checked
                // const isWrongChecked = checkbox.checked;
                // @ts-ignore
                // const model = dataset[i]["model_name"];
                // setIsWrong([...isWrong, isWrongChecked]);
                setTimeDiffs([...timeDiffs, timeDiff]);
                // setModels([...models, model]);
                // Save the answers to firebase
                const docRef = doc(firstore, "semagram/" + name);
                await getDoc(docRef).then((docSnap) => {
                    if (!docSnap.exists()) {
                        // Create a new document
                        setDoc(docRef, {
                            name: name,
                            answers: newAnswers,
                            i: newAnswers.length,
                            dataset: dataset,
                            // isWrong: [...isWrong, checkbox.checked],
                            timeDiffs: [...timeDiffs, timeDiff],
                            // models: [...models, model],
                            date: new Date(),
                        });
                    } else {
                        // Update the document
                        updateDoc(docRef, {
                            answers: newAnswers,
                            i: newAnswers.length,
                            // isWrong: [...isWrong, checkbox.checked],
                            timeDiffs: [...timeDiffs, timeDiff],
                            // models: [...models, model],
                            date: new Date(),
                        });
                    }
                    setI(newAnswers.length);
                })
            }

            setTimeBetweenQuestionsStart(new Date());
            // checkbox.checked = false;

            if (dataset && i + 1 >= dataset.length) {
                alert("Thank you for your participation!");
                setReady(false);
                setAnswers([]);
                setI(0);
            }

            setIsLoading(false);
        }
    }

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        !ready ?
            !disclaimerAccepted ?
                <div className="text-center mt-8 max-w-3xl mx-auto" style={{overflowY: "scroll"}}>
                    <Disclaimer/>
                    <button
                        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg"
                        onClick={() => setDisclaimerAccepted(true)}
                    >
                        Proceed
                    </button>
                </div>
                :
                !exampleSeen ?
                    <div className="text-center mt-8 max-w-3xl mx-auto" style={{overflowY: "scroll"}}>
                        <Example/>
                        <button
                            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg"
                            onClick={() => setExampleSeen(true)}
                        >
                            Proceed
                        </button>
                    </div>
                    :
                    <div>
                        {<TopBanner
                            text={"Remember that with your username you can always resume the session where you left"}/>}
                        {<MadeByMe/>}
                        <div className="text-center mt-12">
                            <div className="text-4xl font-bold">Ready to get bored?</div>
                            <div className="text-2xl mt-4">Please enter your name to start</div>
                            <div>
                                <input
                                    value={name}
                                    onChange={e => setName(e.target.value.toLowerCase())}
                                    onKeyDown={handleStart}
                                    className="rounded-lg shadow-lg p-2 border border-gray-400 mt-4"
                                    placeholder="Type your name here..."
                                />
                            </div>
                            <div>
                                <button
                                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg"
                                    onClick={handleStart}
                                >
                                    Start
                                </button>
                            </div>
                        </div>
                    </div>
            : <div>
                <div className="text-center justify-center mt-12">
                    {<MadeByMe/>}
                    <h1 className="text-4xl font-bold">Is the semantic information correct with respect to the criterion?</h1>
                    <p className="text-xl mt-6" id="line">
                        Concept: <span className="ring-2 ring-blue-500 ring-offset-4 ring-offset-slate-50 rounded-md">
                            <b>{
                                // @ts-ignore
                                dataset ? dataset[i]["llm_concept"] : ""
                            }</b>
                        </span>
                    </p>
                    Criterion: <p className="text-xl mt-6" id="line">
                        Criterion: {
                            // @ts-ignore
                            dataset ? dataset[i]["concept"] : ""
                        }
                    </p>
                    <p className="text-xl mt-6" id="line">
                        Type: {
                            // @ts-ignore
                            dataset ? dataset[i]["type"] : ""
                        }
                    </p>
                </div>
                <div className="flex justify-center mt-8">
                    <button id="middle-button"
                            onClick={() => onClick("yes")}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg disabled:bg-gray-500"
                            disabled={isLoading}>
                        Yes
                    </button>
                    <button id="advanced-button"
                            onClick={() => onClick("no")}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg disabled:bg-gray-500"
                            disabled={isLoading}>
                        No
                    </button>
                    <button id="advanced-button"
                            onClick={() => onClick("wrong")}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg disabled:bg-gray-500"
                            disabled={isLoading}>
                        Wrong
                    </button>
                </div>
                <div className="flex justify-center mt-4">
                    </div>
                    {isDownloaded && dataset ? <div className="flex justify-center mt-8 max-w-2xl mx-auto">
                        <div id={"progress-bar"}
                             className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
                             style={{height: 17, width: `${(i + 1) / dataset.length * 100}%`}}>
                            {Math.round((i + 1) / dataset.length * 100)}%
                        </div>
                    </div> : <div></div>}
                </div>
    );

}

export default App;