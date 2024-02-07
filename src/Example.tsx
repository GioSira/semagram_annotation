import React from "react";

function Example() {
    return (
        <div>
            <div className="text-4xl font-bold">Some Examples of annotation</div>
            <div>

              <div className="text-2xl mt-4">Correct Semantic Information</div>
                <p className="mt-2">
                    For instance, given the triplet
                    <ul>
                        <li>concept: <i>mosquito</i> </li>
                        <li>criterion: <i>can fly.</i></li>
                    </ul>
                    the answer is <b>Yes</b> because the mosquito is an animal that flies.
                </p>

                <div className="text-2xl mt-4">Incorrect Semantic Information</div>
                <p className="mt-2">
                    For instance, given the triplet
                    <ul>
                        <li>concept: <i>superman</i> </li>
                        <li>criterion: <i>made of steel.</i></li>
                    </ul>
                    the answer is <b>No</b> because superman is not a vehicle made of steel.
                </p>

                <div className="text-2xl mt-4">Wrong Semantic Information</div>
                <p className="mt-2">
                    At any point during the annotation task, you can mark an information as "<i>wrong</i>" if you
                    find it erroneous. For instance, given the triplet
                    <ul>
                        <li>concept: <i>kang</i> </li>
                        <li>criterion: <i>can jump.</i></li>
                    </ul>
                    will be labeled as <b>wrong</b> because "kang" is a truncated word.
                </p>

            </div>
        </div>
    );
}

export default Example;