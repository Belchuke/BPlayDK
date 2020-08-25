import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import { IAuser } from "../../interfaces/auserinterface";
import './maincomponet.css';
import ShowMovies from "../showmoviescomponet/showmoviescomponet";


function Maincomponet()
{
  const logo = require('../../resources/Images/BPlayDKLogo.png');

  return (
      <div id="pagewrapper">
        <div id="sidemenu">
          <img alt='logo' src={String(logo)} />
          
          <h2>Movies</h2>
          <h2>Snacks</h2>
          <h2>Reservation</h2>
          <h2>Buy Snacks</h2>
          <h3>About us</h3>
        </div>

        <div id="topbar">
          <h6 id="alabel">hej</h6>
        </div>
       
      <div id="view">
        <BrowserRouter>
          <switch>
            <Route exact path="/" component={ShowMovies}></Route>
          </switch>
        </BrowserRouter>

      </div>

        
     
      </div>
          
  )

}

export default Maincomponet;