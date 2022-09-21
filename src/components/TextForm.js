import React,{useState} from 'react'

export default function TextForm(props){
    // Function to convert the uppper case
    const handleUpClick=()=>{
    console.log("Uppercase was clicked" + Text);
    let newText = Text.toUpperCase();
    setText("You have clicked on handleUpClicked")
    setText(newText);
    props.ShowAlert("Converted to UpperCase", "success")
}

// Function to convert the lower case
const handleLoClick=()=>{
    console.log("Lowercase was clicked" + Text);
    let newText = Text.toLowerCase() ;
    setText("You have clicked on handleLOClicked")
    setText(newText);
    props.ShowAlert("Converted to LowerCase","success")
}


// Function to Clear the text
const handleClearClick=()=>{
    console.log("Claer was clicked" + Text);
    let newText = '';
    setText("You have clicked on handleClaersClicked")
    setText(newText);
    props.ShowAlert("Sucessfully cleared","success")
}

// Function to Copy the text 
const handleleCopy=()=>{
    // console.log("text has copied " + Text);
    let Text = document.getElementById("myBox") ;
    Text.select();
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(Text.value)
    props.ShowAlert("Sucessfully Copied","success")
    

}

// Function to removeextra space 
const handleExtraSpace=()=>{
    console.log("text has been removed " + Text);
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "))
    props.ShowAlert("Sucessfully removed","success")
    

}


    const handleOnChange =(event) => {
        console.log("On change")
        setText(event.target.value)
    }

    const [Text , setText] = useState('');
      return (
          <>
    <div className='conatiner' style={{color: props.mode==='dark'?'white ':'#042743'}}>
        
       <h2>{props.heading} </h2>   
        <div className="mb-3">
         <textarea className="form-control" value={Text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white ':'#042743' }}id="myBox" rows="8"></textarea>
       </div>
       <button disabled={Text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Convert to UperCase</button>
       <button disabled={Text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleLoClick}>Convert to LowerCase</button>
       <button disabled={Text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleClearClick}>Clear Text</button>
       <button  disabled={Text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleleCopy}>Copy Text</button>
       <button  disabled={Text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
     <div className="container my-3" style={{color: props.mode==='dark'?'white ':'#042743'}}>
    <h2> This is Summary</h2  >
     <p> {Text.split(" ").filter((element)=>{return  element.length!==0}).length} words and {Text.length} characters </p>
     <p> {0.008 * Text.split(" ").filter((element)=>{return  element.length!==0}).length}Minutes read </p>
     <h2> Preview</h2>
      <p> {Text.length>0?Text:"Nothing to Preview"} </p>
     </div>

    </>
  )
}
