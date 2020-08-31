import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import axios, { AxiosResponse } from 'axios';
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
  const history = useHistory();

  function tryLogin()
  {
  /*  axios({
      method: 'get', url: 'https://localhost:44398/api/ausers/doesuserexist', {data}
      }}).then(rep => {
      console.log(rep);
      if (rep.data == "Does Not Exist")
        alert("Incorrect email or password");
      else {
        history.push("/login");
      }
    })*/
    let passwordToSeach = inputs.passwordInput;
    let emailToSearch = inputs.emailInput;
    try {
     /* const res = axios.get("https://localhost:44398/api/ausers",
        {
          data:
          {
            "Email": inputs.emailInput,
            "Password": inputs.passwordInput
          }
        }) */
      axios.get("https://localhost:44398/api/ausers", {
        params: {
          Email: inputs.emailInput,
          Password: inputs.passwordInput,
        }
      }).then(response => {
        if (response.data == "Exist")
        {
          history.push("/login");
        }
        else if (response.data == "Does Not Exist")
        {
          alert("Try again with diffrent email or password");
        }
        else
        {
          alert("Error with server");
        }
      });
    } catch (error) { console.log(error) }
    
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