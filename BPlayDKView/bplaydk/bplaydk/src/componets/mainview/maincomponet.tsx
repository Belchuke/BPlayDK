import React, { useState, useEffect, useContext, useRef, Component } from "react";
import './maincomponet.css';
import DynamicSwitch from '../helpercomponets/DynamicSwitch';
import { IAuser } from '../../interfaces/IAuser';
import {contextComponet} from '../../componets/contextComponet/contextComponet';
import axios from 'axios';
import { IAMovie } from "../../interfaces/IAMovie";
import AmovieListItem from '../helpercomponets/AMovieListItem';

function Maincomponet() {
  //#region Properties
  const [getUser, setUser] = useContext(contextComponet);
  const [thisUser, setThisUser] = useState<IAuser>();
  const [AllMovies, SetAllMovies] = useState([]);
  const [AllActionMovies, SetAllActionMovies] = useState([]);
  const [AllComedyMovies, SetAllComedyMovies] = useState([]);
  const [MovieToShowID, SetMovieToShowID] = useState<number>();
  const [GetMovieInfo, SetMovieInfo] = useState<IAMovie>();
  const [currentDynamic, setCurrentDynamic] = useState("Movies")

  const logo = require('../../resources/Images/BPlayDKLogo.png');

  let allMovieItems;
  let allActionMovieItems: any;
  let allComedyMovieItems: any;
  //#endregion

  //#region Constructors
  useEffect(() => {
    let response: String = getUser;
   
    /*  console.log(response);
      var splitter = response.split(' ');
      console.log(splitter);
      axios.get("https://localhost:44398/Api/Ausers/" + splitter[1]).then(rep => {
        setThisUser(rep.data); */
  
        axios.get('https://localhost:44398/api/Amovies').then(rep2 => {
          allMovieItems = rep2.data;
          SetAllMovies(allMovieItems.map((testItems: IAMovie) => <li
            key={testItems.movieId}
            onClick={() => handler(testItems.movieId)}>
          <AmovieListItem
            movieId={testItems.movieId}
            title={testItems.title}
            movieYear={testItems.movieYear}
            released={testItems.released}
            runtime={testItems.runtime}
            genre={testItems.genre}
            director={testItems.director}
            writer={testItems.writer}
            actors={testItems.actors}
            plot={testItems.plot}
            movieLanguage={testItems.movieLanguage}
            country={testItems.country}
            award={testItems.award}
            poster={testItems.poster}
            metascore={testItems.metascore}
            imdbRating={testItems.imdbRating}
            imdbvotes={testItems.imdbvotes}
            imdbid={testItems.imdbid}
            response={testItems.response}
            serverPath={testItems.serverPath}
            key={testItems.movieId}></AmovieListItem>
          </li>
          ));  

          let actionMovieArr = new Array()
          for (let index = 0; index < allMovieItems.length; index++) {
            let amovie: IAMovie = allMovieItems[index];
            if (amovie.genre.includes('Action'))
            {
              actionMovieArr.push(amovie);
            }
          }
          allActionMovieItems = actionMovieArr;
          SetAllActionMovies(allActionMovieItems.map((testItems: IAMovie) =><li
          key={testItems.movieId}
          onClick={() => handler(testItems.movieId)}>
        <AmovieListItem
          movieId={testItems.movieId}
          title={testItems.title}
          movieYear={testItems.movieYear}
          released={testItems.released}
          runtime={testItems.runtime}
          genre={testItems.genre}
          director={testItems.director}
          writer={testItems.writer}
          actors={testItems.actors}
          plot={testItems.plot}
          movieLanguage={testItems.movieLanguage}
          country={testItems.country}
          award={testItems.award}
          poster={testItems.poster}
          metascore={testItems.metascore}
          imdbRating={testItems.imdbRating}
          imdbvotes={testItems.imdbvotes}
          imdbid={testItems.imdbid}
          response={testItems.response}
          serverPath={testItems.serverPath}
          key={testItems.movieId}></AmovieListItem>
          </li>));
          
          let comedyMovieArr = new Array()
          for (let index = 0; index < allMovieItems.length; index++) {
            let amovie: IAMovie = allMovieItems[index];
            if (amovie.genre.includes('Action'))
            {
              comedyMovieArr.push(amovie);
            }
          }
          allComedyMovieItems = comedyMovieArr;
          
          SetAllComedyMovies(allComedyMovieItems.map((testItems: IAMovie) =><li
          key={testItems.movieId}
          onClick={() => handler(testItems.movieId)}>
        <AmovieListItem
          movieId={testItems.movieId}
          title={testItems.title}
          movieYear={testItems.movieYear}
          released={testItems.released}
          runtime={testItems.runtime}
          genre={testItems.genre}
          director={testItems.director}
          writer={testItems.writer}
          actors={testItems.actors}
          plot={testItems.plot}
          movieLanguage={testItems.movieLanguage}
          country={testItems.country}
          award={testItems.award}
          poster={testItems.poster}
          metascore={testItems.metascore}
          imdbRating={testItems.imdbRating}
          imdbvotes={testItems.imdbvotes}
          imdbid={testItems.imdbid}
          response={testItems.response}
          serverPath={testItems.serverPath}
          key={testItems.movieId}></AmovieListItem>
          </li>));
        });
    
    

  }, []);

  useEffect(() => {
    if (MovieToShowID != undefined)
    {
      axios.get('https://localhost:44398/api/Amovies/' + MovieToShowID).then(rep => {
        let movie: IAMovie = rep.data;
        SetMovieInfo(movie);
      })
    }
  }, [MovieToShowID])

  useEffect(() => {
    if (GetMovieInfo != undefined)
    {
      setCurrentDynamic("ShowSpecifMovie");
    }
    
  }, [GetMovieInfo])
  //#endregion

  //#region Routes
  const dynamicRoutes = [
    {
      name: "Movies",
      component: (
        <div id="AllMoviesScrollDiv">
          <h3 id="AMovieTypeRowIdentitier">AllMovies</h3>
          <ul id="AMovieItem">
          {AllMovies}
          </ul>

          <h3 id="AMovieTypeRowIdentitier">Action</h3>
          <ul id="AMovieItem">
          {AllActionMovies}
          </ul>

          <h3 id="AMovieTypeRowIdentitier">Comedy</h3>
          <ul id="AMovieItem">
          {AllComedyMovies}
          </ul>

          <br></br>
        </div>
      )
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
    {
      name: "ShowSpecifMovie",
      component: (
        <div id="AmovieViewInfo">
          <div>
            <img src={GetMovieInfo?.poster} id="posterViewInfo"></img>
          </div>
          <div id="MovieViewInformation">
            <h1 id="MovieTitleInformation">{GetMovieInfo?.title}</h1>
            <p id="MovieInformationPTags">• Movie Realsed year: {GetMovieInfo?.movieYear}</p>
            <p id="MovieInformationPTags">• Movie Runtime: {GetMovieInfo?.runtime}</p>
            <p id="MovieInformationPTags">• IMDB Rating: {GetMovieInfo?.imdbRating}</p>
            <p id="MovieInformationPTags">• Plot: {GetMovieInfo?.plot}</p>
          </div>       
        </div>)
    },
  
  ]
    
  //#endregion
    
  //#region funtions
  const handler = function (ID:number) { SetMovieToShowID(ID);}

  //#endregion

  return (
    <div id="pagewrapper">
      <div id="background-container">
        <div id="FullPage-container">
          <div id="Background-Handler">
            
          </div>
        </div>
     </div>

      <div id="nav-bar">
        <div id="navbar-container" className="grid">
          <div id="navbar-image-container">
            <img id="navbar-img" onClick={() => setCurrentDynamic("Movies")} alt='logo' src={String(logo)} />
          </div>
          <div id="navbar-content-links">
          <ul id="navbar-content-links">
            <li onClick={() => setCurrentDynamic("Movies")}>Movies</li>
            <li onClick={() => setCurrentDynamic("My Reservations")}>My Reservations</li>
            <li onClick={() => setCurrentDynamic("showbuysnacks")}>Buy Snacks</li>
            <li onClick={() => setCurrentDynamic("showsnacks")}>My Snacks</li>
          </ul>      
          </div>
        </div>
      </div>

      <div id="content">
        <div id="fullpage-container">
          <div className="sourceMainPage">
            <div className="sourceMainPage-Content">
              <DynamicSwitch current={currentDynamic} routes={dynamicRoutes}></DynamicSwitch>
            </div>
          </div>
        </div>
      </div>
    </div>     
  )
}
  
export default Maincomponet;