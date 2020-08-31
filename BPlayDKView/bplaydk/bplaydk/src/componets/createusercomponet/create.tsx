import React, { useState, useEffect } from "react";
import '../../resources/globalstyles/bodystyle.css';
import '../../resources/globalstyles/login&createStyles.css';
import { IAuser } from "../../interfaces/auserinterface";
import axios, { AxiosResponse } from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Create()
{
  const [inputs, setInputs] = useState({
    emailInput: "",
    passwordInput: ""
  })

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



  function emailValidate()
  {
    let Em = inputs.emailInput.toLowerCase();
    if (Em.endsWith(".com") || Em.endsWith(".dk") || Em.endsWith(".co.uk") || Em.endsWith(".net")) {
      if (Em.includes("@")) {
        return true;
      }

      else
      {
        return false;
      }      
    }
    else
    {
      return false;
    }
     
  }

  function passwordValidate()
  {
    return true;
  }

  interface auser
  {
    id: number,
    email: string,
    password: string
  }

  const [jsonResult, setJsonResult] = useState<auser>({
    id: 0,
    email: "",
    password: ""
  });


  function onResponse(rep:string)
  {
    setpostresult(rep);

    if (rep != "User allready exists")
    {
      alert("User created");
      window.history.go(-1);
    }
    
    else
    {
      alert("user allready exist");
    }
  }

  const [postresult, setpostresult] = useState<string>("");

  function createUser()
  {
    if (emailValidate())
    {
      if (passwordValidate())
      {    
        console.log(inputs.emailInput);
        console.log(inputs.passwordInput);
        axios({
          method: 'post', url: 'https://localhost:44398/api/ausers', data: {
            UserName: inputs.emailInput,
            Email: inputs.emailInput,
            Password: inputs.passwordInput,
            AuserTypeId: 1
          },
        }).then(rep => {

          console.log(rep.data);
          if (rep.data == "User Allready exist")
          {
            alert("Account allready exist");
          }
          else {
            alert("New user created");
            window.history.go(-1);
          }
        });  
        
      }
    }
  }
    return (
      <div>
        <div className="centered">
          <div className="Box">
  
            <div className="title" style={{marginBottom: 25}}>
              <h1>Create Account</h1>
            </div>
  
            <div>
            <input placeholder="Email" value={inputs.emailInput} onChange={(e) => handleEmail(e.target.value)}></input>
              <input placeholder="Password" type="password" value={inputs.passwordInput} onChange={(e) => handlePassword(e.target.value)} id="input2"></input>  
                
              <Link to="/">Cancel</Link>
              <button onClick={() => createUser()}>Create User</button>
            </div>
  
          </div>
        </div>
        <br></br>
      </div>
    );
}

export default Create;