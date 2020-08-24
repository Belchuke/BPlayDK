import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../../resources/globalstyles/bodystyle.css';
import '../../resources/globalstyles/login&createStyles.css';
import { IAuser } from "../../interfaces/auserinterface";

function Login()
{
   // Define component state
   const [inputs, setInputs] = useState({
    emailInput: "",
    passwordInput: ""
  })
  
  const [jsonResult, setJsonResult] = useState<IAuser>({
    id: 0,
    email: "",
    password: ""
  });


   //#region Inputhandlers
  // Input handler which uses state
  function handleEmail(e: string){
    setInputs({
      ...inputs,
      emailInput: e
    });
  }

  function handlePassword(e: string){
    setInputs({
      ...inputs,
      passwordInput: e
    });
  }

  //#endregion


  return (
    <div>
      <div className="centered">
        <div className="Box">

          <div className="title" style={{marginBottom: 25}}>
            <h1>BPlay</h1>
          </div>

          <div>
            <input placeholder="Email" value={inputs.emailInput} onChange={(e) => handleEmail(e.target.value)}></input>
            <input placeholder="Password" type="password" value={inputs.passwordInput} onChange={(e) => handlePassword(e.target.value)} id="input2"></input>   
            <Link to="/createUser">Create Account
            </Link>
          </div>

        </div>
      </div>
      <br></br>
    </div>
  );  
}

export default Login;