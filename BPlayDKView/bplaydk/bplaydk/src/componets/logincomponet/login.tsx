import React, { useState, useContext } from "react";
import {
  Link,
} from "react-router-dom";
import axios from 'axios';
import '../../resources/globalstyles/bodystyle.css';
import '../../resources/globalstyles/login&createStyles.css';
import { useHistory } from "react-router-dom";
import {contextComponet} from '../../componets/contextComponet/contextComponet';



function Login()
{
   // Define component state
   const [inputs, setInputs] = useState({
    emailInput: "",
    passwordInput: ""
  })
  

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
  const [getUser, setUser] = useContext(contextComponet);

  function tryLogin()
  {
    try {
      axios.get("https://localhost:44398/api/ausers", {
        params: {
          Email: inputs.emailInput,
          Password: inputs.passwordInput,
        }
      }).then(response => {
        if (response.data.includes('Exist'))
        {
          setUser(response.data);
          history.push({
            pathname: '/login',
          });
        }
        else if (response.data === "Does Not Exist")
        {
          alert("Try again with diffrent email or password");
        }
        else
        {
          console.log(response.data);
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