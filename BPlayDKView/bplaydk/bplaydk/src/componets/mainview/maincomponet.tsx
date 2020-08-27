import React, { } from "react";
import './maincomponet.css';
import ShowMovies from "../moviescomponet/moviescomponet"
import ShowReservations from "../reservationscomponets/reservationcomponets";
import ShowBuySnacks from "../buysnackscomponet/buysnackscomponet";
import ShowSnacks from "../snackscomponet/snackscomponet";
import ShowAboutUs from "../aboutuscomponet/aboutcomponet";


function Maincomponet()
{
  let array: string[] = ["showmovies", "showreservations","showbuysnacks","showsnacks", "showaboutus"];

  function toggle_visibility(id: string)
  {
    if (id == "showmovies")
    {
      var e = document.getElementById(id)!;
      console.log(e);
      e.style.visibility = 'visible';  

      var e2 = document.getElementById("showreservations")!;
      console.log(e2);
      e2.style.visibility = 'collapse';

      var e3 = document.getElementById("showbuysnacks")!;
      console.log(e3);
      e3.style.visibility = 'collapse';

      var e4 = document.getElementById("showsnacks")!;
      console.log(e4);
      e4.style.visibility = 'collapse';

      var e5 = document.getElementById("showaboutus")!;
      console.log(e4);
      e5.style.visibility = 'collapse';
    }
    else if (id == "showreservations")
    {
      var e = document.getElementById(id)!;
      console.log(e);
      e.style.visibility = 'visible';  

      var e2 = document.getElementById("showmovies")!;
      console.log(e2);
      e2.style.visibility = 'collapse';

      var e3 = document.getElementById("showbuysnacks")!;
      console.log(e3);
      e3.style.visibility = 'collapse';

      var e4 = document.getElementById("showsnacks")!;
      console.log(e4);
      e4.style.visibility = 'collapse';

      var e5 = document.getElementById("showaboutus")!;
      console.log(e4);
      e5.style.visibility = 'collapse';
    }
    else if (id == "showbuysnacks")
    {
      var e = document.getElementById(id)!;
      console.log(e);
      e.style.visibility = 'visible';  

      var e2 = document.getElementById("showmovies")!;
      console.log(e2);
      e2.style.visibility = 'collapse';

      var e3 = document.getElementById("showsnacks")!;
      console.log(e3);
      e3.style.visibility = 'collapse';

      var e4 = document.getElementById("showreservations")!;
      console.log(e4);
      e4.style.visibility = 'collapse';

      var e5 = document.getElementById("showaboutus")!;
      console.log(e4);
      e5.style.visibility = 'collapse';
    }  
    else if (id == "showsnacks")
    {
      var e = document.getElementById(id)!;
      console.log(e);
      e.style.visibility = 'visible';  

      var e2 = document.getElementById("showmovies")!;
      console.log(e2);
      e2.style.visibility = 'collapse';

      var e3 = document.getElementById("showbuysnacks")!;
      console.log(e3);
      e3.style.visibility = 'collapse';

      var e4 = document.getElementById("showreservations")!;
      console.log(e4);
      e4.style.visibility = 'collapse';

      var e5 = document.getElementById("showaboutus")!;
      console.log(e4);
      e5.style.visibility = 'collapse';
    }
    else if (id == "showsnacks")
    {
      var e = document.getElementById(id)!;
      console.log(e);
      e.style.visibility = 'visible';  

      var e2 = document.getElementById("showaboutus")!;
      console.log(e2);
      e2.style.visibility = 'collapse';

      var e3 = document.getElementById("showbuysnacks")!;
      console.log(e3);
      e3.style.visibility = 'collapse';

      var e4 = document.getElementById("showreservations")!;
      console.log(e4);
      e4.style.visibility = 'collapse';

      var e5 = document.getElementById("showsnacks")!;
      console.log(e4);
      e5.style.visibility = 'collapse';
    }
  }

  const logo = require('../../resources/Images/BPlayDKLogo.png');
  return (
      <div id="pagewrapper">
        <div id="sidemenu">
          <img alt='logo' src={String(logo)} />          
          <h2 onClick={() => toggle_visibility("showmovies")}>Movies</h2>
          <h2 onClick={() => toggle_visibility("showreservations")}>My Reservations</h2>
          <h2 onClick={() => toggle_visibility("showbuysnacks")}>Buy Snacks</h2>
          <h2 onClick={() => toggle_visibility("showsnacks")}>My Snacks</h2>
          <h3 onClick={() => toggle_visibility("showaboutus")}>About us</h3>
        </div>

        <div id="topbar">
          <h6 id="alabel">hej</h6>
        </div>
       
      <div id="view">
        <div id="showmovies">
          <ShowMovies></ShowMovies>
        </div>

        <div id="showreservations">
          <ShowReservations></ShowReservations>
        </div>

        <div id="showbuysnacks">
          <ShowBuySnacks></ShowBuySnacks>
        </div>

        <div id="showsnacks">
          <ShowSnacks></ShowSnacks>
        </div>

        <div id="showaboutus">
          <ShowAboutUs></ShowAboutUs>
        </div>
      </div>

     </div>
          
  )

}

export default Maincomponet;