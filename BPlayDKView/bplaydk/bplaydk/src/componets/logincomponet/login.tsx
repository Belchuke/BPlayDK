import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Redirect } from "react-router-dom";
import '../../resources/globalstyles/bodystyle.css';
import '../../resources/globalstyles/login&createStyles.css';
import { IAuser } from "../../interfaces/auserinterface";
import { useHistory } from "react-router-dom";

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
    username: "",
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

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      Email: inputs.emailInput,
      Password: inputs.passwordInput
    })
  };

  function onResponse(rep:string)
  {
    if (rep == "User Exist")
    {
      // If it is correct
    }
    else
    {
      alert("Email or password was incorrect try again");
    }
  }

  const history = useHistory();

  function tryLogin()
  {
    fetch("https://localhost:44337/controller/users/checkifuserexist", requestOptions)
      .then(x => x.text()).then(y => onResponse(y));

    history.push("/login");
  }

  const logo = require('../../resources/Images/BPlayDKLogo.png');

  return (
    <div>
      <div className="centered">
        <div className="Box">
          <div className="title" style={{marginBottom: 25}}>
            <img alt='logo' src={String(logo)} id="imgstyle"></img>
          </div>

          <div>
            <input placeholder="Email" value={inputs.emailInput} onChange={(e) => handleEmail(e.target.value)}></input>
            <input placeholder="Password" type="password" value={inputs.passwordInput} onChange={(e) => handlePassword(e.target.value)} id="input2"></input>   
            <Link to="/createUser">Create Account
            </Link>
            <button onClick={() => tryLogin()}>Log In</button>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );  
}

export default Login;