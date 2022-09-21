// import logo from './logo.svg';
import "./App.css";
import React,   { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light"); //weather dark mode is enable or not

  const [alert, SetAlert] = useState(null);
  // Alert function
  const ShowAlert = (message, type) => {
    SetAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      SetAlert(null);
    }, 2000);
  };

  // Dark or light function Enable or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      ShowAlert("Dark mode has been Enabled", "sucess");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      ShowAlert("Light mode has been Enabled", "sucess");
    }
  };

  return (
    <>
      {/* < Navbar  title="TextUtils" AboutText="About TextUtils" /> */}
      {/* < Navbar   /> */}
       <Router>
      <Navbar title="TextOperations" mode={mode} toggleMode={toggleMode} />

      <Alert Alert={alert} />
      <div className="container  my-3">
      <Switch>
          <Route exact path="/about">
            <About  mode={mode}/>
          </Route>
          
          <Route exact path="/">
          <TextForm
          ShowAlert={ShowAlert}
          heading=" Try TextOperation Convert UpperCase LowerCase Remove Extra Space Copy Text "
          my-3="true"
          mode={mode}
        />
          </Route>
        </Switch>
        
      </div>
      </Router>
    </>
  );
}

export default App;
