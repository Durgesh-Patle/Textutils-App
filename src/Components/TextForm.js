import React, { useState } from 'react'

const TextForm = (props) => {

    const handleUpClick = () => {
        // console.log("Uppercase was Clicked" + Text);
        let newText = Text.toUpperCase();
        setText(newText);
        // setText("You have clicked on handleClick");
    }

    const handleLoClick = () => {
        let newText = Text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = " ";
        setText(newText);
    }

    const handleCopyClick = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        // alert("Hello");
        let newText = Text.split(/[]+/);
        setText(newText.join(" "))
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const [Text, setText] = useState('');
    // Text="New Text";  // Wrong way to change the state.
    // setText("New State")  // Correct way to change the state.
    return (
        <>

            <div>
                <h1> {props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" onChange={handleOnChange} value={Text} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
                <button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-success mx-1" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-secondary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>

            <div className="my-1">
                <h2>Your Text Summury</h2>
                <p>{Text.split(" ").length} Word And {Text.length} Characters</p>
                <p>{0.008 * Text.split("").length} Minutes Read</p>
                <p>Previews</p>
                <p>{Text}</p>
            </div>
        </>

    )
}

export default TextForm
