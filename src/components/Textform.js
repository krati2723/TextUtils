import React, {useState} from 'react'



export default function Textform(props) {
  
   const toSentenceCase = (str) => {
    if (!str) return "";
    return str
      .toLowerCase()
      .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
  };
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked:" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to upper case", "success : ");
  }


  const handleLoClick = ()=>{
    // console.log("Lowercase was clicked:" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lower case", "success : ");
  }
  const handleSenClick = ()=>{
    // console.log("Lowercase was clicked:" + text);
    let newText = toSentenceCase(text);
    setText(newText)
  }
  const handleOnChange = (e)=>{
    
    // console.log("On change");
    setText(e.target.value);
  }

  const handleCopy = ()=>{
    // var text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard","success : ")
  }
  const [text, setText] = useState('');
  // text = "new text" ;//wrong way to change the state
  // setText("new text"); // Correct way to change the state

  return (
    <>
   <div className="container" style ={{color:props.mode==='dark'?'white':'#09182d'}}>
    <h2 className='mb-2'>{props.heading} </h2>
<div className="mb-3">
  
  <textarea className="form-control"  value = {text} onChange = {handleOnChange} style ={{backgroundColor:props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'#09182d'}}  id="myBox" rows="9"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleSenClick}>Sentence Case</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text </button>
    </div>
    <div className='container my-2' style ={{color:props.mode==='dark'?'#fff3cd':'#09182d'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>
      <p>{0.008 *text.split(" ").filter((element)=>{return element.length !==0}).length } Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
