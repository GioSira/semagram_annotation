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
                        <li>concept: <i>banana</i> </li>
                        <li>criterion: <i>Food - This frame contains words referring to items of food</i></li>
                        <li>type: nouns</li>
                    </ul>
                    the answer is <b>Yes</b> because the banana is a food.
                </p>

                <p className="mt-2">
                    For instance, given the triplet
                    <ul>
                        <li>concept: <i>fork</i> </li>
                        <li>criterion: <i>Food - This frame contains words referring to items of food</i></li>
                        <li>type: nouns</li>
                    </ul>
                    the answer is <b>No</b> because a fork is not a food.
                </p>

                <div className="text-2xl mt-4">Wrong Semantic Information</div>
                <p className="mt-2">
                    At any point during the annotation task, you can mark an information as "<i>wrong</i>" if you
                    find it erroneous. For instance, given the triplet
                    <ul>
                        <li>concept: <i>ban</i> </li>
                        <li>criterion: <i>Food - This frame contains words referring to items of food</i></li>
                        <li>type: nouns</li>
                    </ul>
                    will be labeled as <b>wrong</b> because "ban" is a truncated word.
                </p>

            </div>
        </div>
    );
}

export default Example;