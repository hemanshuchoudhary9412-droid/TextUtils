import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("uppercase was clicked : " + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success")
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success")
    }
    const handleClearClick = () =>{
        let newText = "";
        setText(newText);
    }
    const handleOnChange = (event)=>{
        // console.log("On Change")
        setText(event.target.value);
        
    }
    const handleCopy = ()=>{
        console.log("i am copyied");
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const [text, setText] = useState("");
  return (
    <>
    <div className="container" style = {{color:props.mode ==='dark'?'white':'black'}}>
        <h1> {props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange = {handleOnChange} style = {{backgroundColor:props.mode ==='light'?'white':'grey',color:props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
    </div>
    <div className="container my-3" style = {{color:props.mode ==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p> {0.88 * text.split(" ").length} minutes take to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
