import React, { Component, useState } from "react";
import './maincomponet.css';
import DynamicSwitch from '../helpercomponets/DynamicSwitch';


function Maincomponet() {
  
  const dynamicRoutes = [
    {
        name: "Movies",
        component: (
        <div>
          <h1 id="ViewID">Movies</h1>
        </div>)
    },
    {
        name: "My Reservations",
        component: (
            <div>
                <h1 id="ViewID">My Reservations</h1>
                <p>So you can pass down new elements!</p>
            </div>)
    },
    {
      name: "showbuysnacks",
      component: (
          <div>
              <h1 id="ViewID">Buy Snacks</h1>
              <p>So you can pass down new elements!</p>
          </div>)
    },
    {
      name: "showsnacks",
      component: (
          <div>
              <h1 id="ViewID">showsnacks</h1>
              <p>So you can pass down new elements!</p>
          </div>)
    },
    {
      name: "showaboutus",
      component: (
          <div>
              <h1 id="ViewID">showaboutus</h1>
              <p>So you can pass down new elements!</p>
          </div>)
  },

]
  const [currentDynamic, setCurrentDynamic] = useState("Movies")
  
  const logo = require('../../resources/Images/BPlayDKLogo.png');
  return (
      <div id="pagewrapper">
        <div id="sidemenu">
          <img alt='logo' src={String(logo)} />          
          <h2 onClick={() => setCurrentDynamic("Movies")}>Movies</h2>
          <h2 onClick={() => setCurrentDynamic("My Reservations")}>My Reservations</h2>
          <h2 onClick={() => setCurrentDynamic("showbuysnacks")}>Buy Snacks</h2>
          <h2 onClick={() => setCurrentDynamic("showsnacks")}>My Snacks</h2>
          <h3 onClick={() => setCurrentDynamic("showaboutus")}>About us</h3>
        </div>

        <div id="topbar">
          <h6 id="alabel">hej</h6>
        </div>
       
      <div id="view">
        <DynamicSwitch current={currentDynamic} routes={dynamicRoutes}></DynamicSwitch>
      </div>

     </div>
          
  )

}

export default Maincomponet;