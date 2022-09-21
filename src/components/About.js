import React from "react";

export default function (props) {
  // const[mystyle, setMystyle] = useState( {
  //   color: "black",
  //   backgroundColor: "white",
  // });
  let mystyle = {
    color: props.mode === 'dark'?'white':'#042743',
    backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white'
}


//    const [btntext, setBtnText]= useState("Enable  dark mode")
//   const toggleStyle=()=>{
//     if (mystyle.color==='white'){
//         setMystyle({
//             color:'black',
//             backgroundColor:'white'
            
//         })
//         setBtnText("Enable Light mode")
//     }
//     else{
//         setMystyle({
//             color:'white',
//             backgroundColor:'black'
//         })
//         setBtnText("Enable Dark mode")
//     }

// }


  return (
    <div className="container" style={mystyle}>
      <h1 className="my-3"> About Us</h1>
      <div className="accordion" id="accordionExample" style={mystyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              style={mystyle}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            style={mystyle}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              style={mystyle}
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to Use</strong> 
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            style={mystyle}
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
            TextOperation is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              style={mystyle}
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong> 
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            style={mystyle}
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button type="button" onClick={toggleStyle} className="btn btn-primary ">{btntext}</button>
      </div> */}
    </div>
  );
}





