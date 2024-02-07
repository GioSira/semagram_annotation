import React from "react";

function Disclaimer() {
    return (
        <div>
            <div className="text-4xl font-bold">Correct or Incorrect Concept?</div>
            <div>
                <div className="text-2xl mt-4">Scope of this annotation task</div>
                <p className="mt-2">
                    The goal of this task is simply to evaluate if Large Language Models are able to
                    generate a correct concept given a category and a feature.
                </p>
                <div className="text-2xl mt-4">What are you going to do?</div>
                <p className="mt-2">
                    In this annotation task, you will be given a concept to evaluate. Your job is
                    to decide whether the concept satisfy the given category and criteria.
                </p>
                <p className="mt-2">
                    At any point during the annotation task, you can mark an information as "<i>wrong</i>" if you
                    find it erroneous. A wrong semantic information could be an incomplete word (e.g., "t-shi")
                    or a fragment of text (e.g., "that satisfy the").
                </p>
                <p>Please, register your name as <b>name_surname</b>.
                    The registration is only used to pause the annotation.
                    You can continue the annotation in a second moment from the point you interrupted. </p>
                <p className="mt-2">
                    You will need to complete <b>300</b> of these <b>annotations</b>, which should take about
                    <b>30 minutes</b>. It's important to note that this task
                    does not evaluate your knowledge of English, so you don't need to worry about being tested. If
                    you need more information about the word, you can use the internet to help you.
                </p>
            </div>
        </div>
    );
}

export default Disclaimer;