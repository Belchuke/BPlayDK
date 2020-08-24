import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../../resources/globalstyles/bodystyle.css';
import { IAuser } from "../../interfaces/auserinterface";
import './maincomponet.css';

function Maincomponet()
{
  const logo = require('../../resources/Images/BPlayDKLogo.png');

  return (
    <Router>
      <div id="pagewrapper">
        <div id="sidemenu">
          <img alt='logo' src={String(logo)} />
          
          <h2>Movies</h2>
          <h2>Snacks</h2>
          <h2>Reservation</h2>
          <h2>Buy Snacks</h2>
          <h3>About us</h3>
        </div>

        <div id="mainbar">
        
        <div id="topbar">
          
        </div>

        <div id="view">
          <Switch>
              
          </Switch>
        </div>
      </div>
      
    </div>
    </Router>
    
  )

}

export default Maincomponet;