import React, {useState} from 'react'

export default function Main(props) {

    const [text, setText] = useState("");
     
    const changeText = (evt)=>{
        setText(evt.target.value);
    }
    const updateUpCase = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    const removeText = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Text Removed", "success");
    }
    const updateLoCase = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }
    const CopyText = () =>{
        let boxText = document.getElementById("box");
        boxText.select();
        navigator.clipboard.writeText(boxText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard", "success");
      }
  
  return (
    <>
<div className="mb-3">
    <div className="container my-3">
  <h2>{props.heading}</h2>
  
  <textarea style={{backgroundColor: props.mode === 'dark' ? '#30363B' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} className="form-control" id="box"onChange={changeText} rows="5" value={text}></textarea>
  <button disabled={text.length === 0} type="button" className="btn btn-success mt-3 mx-1" onClick={updateUpCase}>Update to Uppercase</button>
  <button disabled={text.length === 0} type="button" className="btn btn-success mt-3 mx-1" onClick={updateLoCase}>Update to Lowercase</button>
  <button disabled={text.length === 0} type="button" className="btn btn-success mt-3 mx-1" onClick={CopyText}>Copy Text</button>
  <button disabled={text.length === 0} type="button" className="btn btn-success mt-3 mx-1" onClick={removeText}>Remove Text</button>
  </div>
  <div className="container my-2">
    <h2>Summary</h2>
    <p> {text.split(" ").filter((element)=>{return element.length !== 0}).length} Words {text.length} Characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes Read</p>
    <h2>Preview</h2>
    <p>{text.length > 0 ? text:"Enter Some Text In The Above Input Box"}</p>
  </div>
</div>

</>
  )
}
