import React, { useState, useEffect, useContext, useRef, Component } from "react";
import './maincomponet.css';
import DynamicSwitch from '../helpercomponets/DynamicSwitch';
import { IAuser } from '../../interfaces/IAuser';
import {contextComponet} from '../../componets/contextComponet/contextComponet';
import axios from 'axios';
import AmovieListItem from '../helpercomponets/AMovieListItem';
import { IASeat } from "../../interfaces/IASeat";
import { IAMovie } from "../../interfaces/IAMovie";
import { IACinema} from  "../../interfaces/IACinema";
import { useHistory } from "react-router-dom";


function Maincomponet() {
  //#region Properties
  const [getUser, setUser] = useContext(contextComponet);
  const [thisUser, setThisUser] = useState<IAuser>();
  const [AllMovies, SetAllMovies] = useState([]);
  const [AllActionMovies, SetAllActionMovies] = useState([]);
  const [AllComedyMovies, SetAllComedyMovies] = useState([]);
  const [AllRomanticMovies,SetAllRomanticMovies] = useState([])
  const [AllFantasyMovies,SetAllFantasyMovies] = useState([]);
  const [MovieToShowID, SetMovieToShowID] = useState<number>();
  const [GetMovieInfo, SetMovieInfo] = useState<IAMovie>();
  const [ThisCinema,SetCinema] = useState<IACinema>();
  const [SeatsCinema,SetSeatsCinema] = useState<Array<IASeat>>()
  const [SelectedSeat,SetSelectedSeat] = useState([]);
  const [currentDynamic, setCurrentDynamic] = useState("Movies")

  const logo = require('../../resources/Images/BPlayDKLogo.png');

  let allMovieItems:any;
  let allActionMovieItems: any;
  let allComedyMovieItems: any;
  let allRomanticMovieItems: any;
  let allFanAndSciMovieItems: any;
  //#endregion
  const history = useHistory();
  //#region Constructors
  useEffect(() => {
    let response: String = getUser;
    console.log(response);
    
    if(response !== undefined)
    {
      axios.get('https://localhost:44398/api/Amovies').then(rep2 => {
        allMovieItems = rep2.data as Array<IAMovie>;
          SetAllMovies(allMovieItems.map((testItems: IAMovie) => <li
            key={testItems.movieId}
            onClick={() => AmovieItemClicked(testItems.movieId)}>
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

          let actionMovieArr = new Array<IAMovie>()
          for (let index = 0; index < allMovieItems.length; index++) {
            let amovie: IAMovie = allMovieItems[index];
            if (amovie.genre.includes('Action'))
            {
              actionMovieArr.push(amovie);
            }
          }
          allActionMovieItems = actionMovieArr;
          SetAllActionMovies(allActionMovieItems.map((MovieItem: IAMovie) =><li
          key={MovieItem.movieId}
          onClick={() => AmovieItemClicked(MovieItem.movieId)}>
        <AmovieListItem
          movieId={MovieItem.movieId}
          title={MovieItem.title}
          movieYear={MovieItem.movieYear}
          released={MovieItem.released}
          runtime={MovieItem.runtime}
          genre={MovieItem.genre}
          director={MovieItem.director}
          writer={MovieItem.writer}
          actors={MovieItem.actors}
          plot={MovieItem.plot}
          movieLanguage={MovieItem.movieLanguage}
          country={MovieItem.country}
          award={MovieItem.award}
          poster={MovieItem.poster}
          metascore={MovieItem.metascore}
          imdbRating={MovieItem.imdbRating}
          imdbvotes={MovieItem.imdbvotes}
          imdbid={MovieItem.imdbid}
          response={MovieItem.response}
          serverPath={MovieItem.serverPath}
          key={MovieItem.movieId}></AmovieListItem>
          </li>));
          
          let comedyMovieArr = new Array<IAMovie>()
          for (let index = 0; index < allMovieItems.length; index++) {
            let amovie: IAMovie = allMovieItems[index];
            if (amovie.genre.includes('Action'))
            {
              comedyMovieArr.push(amovie);
            }
          }
          allComedyMovieItems = comedyMovieArr;
          
          SetAllComedyMovies(allComedyMovieItems.map((MovieItem: IAMovie) =><li
          key={MovieItem.movieId}
          onClick={() => AmovieItemClicked(MovieItem.movieId)}>
        <AmovieListItem
          movieId={MovieItem.movieId}
          title={MovieItem.title}
          movieYear={MovieItem.movieYear}
          released={MovieItem.released}
          runtime={MovieItem.runtime}
          genre={MovieItem.genre}
          director={MovieItem.director}
          writer={MovieItem.writer}
          actors={MovieItem.actors}
          plot={MovieItem.plot}
          movieLanguage={MovieItem.movieLanguage}
          country={MovieItem.country}
          award={MovieItem.award}
          poster={MovieItem.poster}
          metascore={MovieItem.metascore}
          imdbRating={MovieItem.imdbRating}
          imdbvotes={MovieItem.imdbvotes}
          imdbid={MovieItem.imdbid}
          response={MovieItem.response}
          serverPath={MovieItem.serverPath}
          key={MovieItem.movieId}></AmovieListItem>
          </li>));

        let romanticMovieArr = new Array<IAMovie>()
        for (let index = 0; index < allMovieItems.length; index++) 
        {
          let amovie: IAMovie = allMovieItems[index];
          if (amovie.genre.includes('Romance'))
          {
            romanticMovieArr.push(amovie);
          }
        }
        allRomanticMovieItems = romanticMovieArr;

        SetAllRomanticMovies(allRomanticMovieItems.map((MovieItem: IAMovie) =><li
        key={MovieItem.movieId}
        onClick={() => AmovieItemClicked(MovieItem.movieId)}>
      <AmovieListItem
        movieId={MovieItem.movieId}
        title={MovieItem.title}
        movieYear={MovieItem.movieYear}
        released={MovieItem.released}
        runtime={MovieItem.runtime}
        genre={MovieItem.genre}
        director={MovieItem.director}
        writer={MovieItem.writer}
        actors={MovieItem.actors}
        plot={MovieItem.plot}
        movieLanguage={MovieItem.movieLanguage}
        country={MovieItem.country}
        award={MovieItem.award}
        poster={MovieItem.poster}
        metascore={MovieItem.metascore}
        imdbRating={MovieItem.imdbRating}
        imdbvotes={MovieItem.imdbvotes}
        imdbid={MovieItem.imdbid}
        response={MovieItem.response}
        serverPath={MovieItem.serverPath}
        key={MovieItem.movieId}></AmovieListItem>
        </li>));
       
        
        let Fantasy = new Array<IAMovie>();
        for (let index = 0; index < allMovieItems.length; index++) 
        {
          let amovie: IAMovie = allMovieItems[index];
          if (amovie.genre.includes('Fantasy') || amovie.genre.includes('Sci-Fi') )
          {
            Fantasy.push(amovie);
          }
        }
        allFanAndSciMovieItems = Fantasy;
        SetAllFantasyMovies(allFanAndSciMovieItems.map((MovieItem: IAMovie) =><li
          key={MovieItem.movieId}
          onClick={() => AmovieItemClicked(MovieItem.movieId)}>
        <AmovieListItem
          movieId={MovieItem.movieId}
          title={MovieItem.title}
          movieYear={MovieItem.movieYear}
          released={MovieItem.released}
          runtime={MovieItem.runtime}
          genre={MovieItem.genre}
          director={MovieItem.director}
          writer={MovieItem.writer}
          actors={MovieItem.actors}
          plot={MovieItem.plot}
          movieLanguage={MovieItem.movieLanguage}
          country={MovieItem.country}
          award={MovieItem.award}
          poster={MovieItem.poster}
          metascore={MovieItem.metascore}
          imdbRating={MovieItem.imdbRating}
          imdbvotes={MovieItem.imdbvotes}
          imdbid={MovieItem.imdbid}
          response={MovieItem.response}
          serverPath={MovieItem.serverPath}
          key={MovieItem.movieId}></AmovieListItem>
          </li>));
          }); 
    }
    else
    {
      history.push({
        pathname: '/',
      });
    }  
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

  const ShowCinema = () => {
    ThisCinema.AllSeats.sort((a, b) => a.seatIdentity < b.seatIdentity ? -1 : a.seatIdentity > b.seatIdentity ? 1 : 0)
      return(
        <div className="Cinema">

          <div className="Cinema-information">
            <div className="Cinema-information-container">
              <ul>
                {SelectedSeat.map(item => (
                  <li key={item}><p>{item}</p></li>))}
              </ul>             
            </div>
          </div>

          <div className="Cinema-Container">
            <div className="screen">
              <p>Screen</p>
              <p>{ThisCinema.cinemaName}</p>
            </div>

          <div className="Seats">
            <p>Seats</p>
              <div className="Seats_Container">
                <div id="Row_1">
                  <img className="Seats-aSeat Seats-aSeat-First" onClick={() => seatClicked(ThisCinema.AllSeats[0].seatsId.toString(),ThisCinema.AllSeats[0].seatIdentity )}
                    id={ThisCinema.AllSeats[0].seatsId.toString()} src="data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw=="></img>

                  <img className="Seats-aSeat" onClick={() => seatClicked(ThisCinema.AllSeats[1].seatsId.toString(), ThisCinema.AllSeats[1].seatIdentity)} 
                    id={ThisCinema.AllSeats[1].seatsId.toString()} src="data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw==" ></img>

                  <img className="Seats-aSeat" onClick={() => seatClicked(ThisCinema.AllSeats[2].seatsId.toString(), ThisCinema.AllSeats[2].seatIdentity)}
                    id={ThisCinema.AllSeats[2].seatsId.toString()} src="data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw==" ></img>

                  <img className="Seats-aSeat" onClick={() => seatClicked(ThisCinema.AllSeats[3].seatsId.toString(),ThisCinema.AllSeats[3])}
                    id={ThisCinema.AllSeats[3].seatsId.toString()} src="data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw=="></img>

                  <img className="Seats-aSeat" onClick={() => seatClicked(ThisCinema.AllSeats[4].seatsId.toString(), ThisCinema.AllSeats[4].seatIdentity)}
                    id={ThisCinema.AllSeats[4].seatsId.toString()} src="data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw=="></img>

                  <img className="Seats-aSeat" onClick={() => seatClicked(ThisCinema.AllSeats[5].seatsId.toString(), ThisCinema.AllSeats[5].seatIdentity)}
                    id={ThisCinema.AllSeats[5].seatsId.toString()} src="data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw=="></img>
               </div>

               <div id="Row_2">
                  <img className="Seats-aSeat Seats-aSeat-First" onClick={(e) => seatClicked(ThisCinema.AllSeats[6].seatsId.toString(),ThisCinema.AllSeats[6].seatIdentity )}
                    id={ThisCinema.AllSeats[6].seatsId.toString()} src="data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw=="></img>

                  <img className="Seats-aSeat" onClick={() => seatClicked(ThisCinema.AllSeats[7].seatsId.toString(), ThisCinema.AllSeats[7].seatIdentity)}
                    id={ThisCinema.AllSeats[7].seatsId.toString()} src="data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw==" ></img>

                  <img className="Seats-aSeat" onClick={() => seatClicked(ThisCinema.AllSeats[8].seatsId.toString(), ThisCinema.AllSeats[8].seatIdentity)}
                    id={ThisCinema.AllSeats[8].seatsId.toString()} src="data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw==" ></img>

                  <img className="Seats-aSeat" onClick={() => seatClicked(ThisCinema.AllSeats[9].seatsId.toString(), ThisCinema.AllSeats[9].seatIdentity)}
                    id={ThisCinema.AllSeats[9].seatsId.toString()} src="data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw=="></img>

                  <img className="Seats-aSeat" onClick={() => seatClicked(ThisCinema.AllSeats[10].seatsId.toString(), ThisCinema.AllSeats[10].seatIdentity)}
                    id={ThisCinema.AllSeats[10].seatsId.toString()} src="data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw=="></img>

                  <img className="Seats-aSeat" onClick={() => seatClicked(ThisCinema.AllSeats[11].seatsId.toString(), ThisCinema.AllSeats[11].seatIdentity)}
                    id={ThisCinema.AllSeats[11].seatsId.toString()} src="data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw=="></img>
               </div>

               <div id="Row_3">
                  <img className="Seats-aSeat Seats-aSeat-First" onClick={() => seatClicked(ThisCinema.AllSeats[12].seatsId.toString(), ThisCinema.AllSeats[12].seatIdentity)}
                    id={ThisCinema.AllSeats[12].seatsId.toString()} src="data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw=="></img>

                  <img className="Seats-aSeat" onClick={() => seatClicked(ThisCinema.AllSeats[13].seatsId.toString(), ThisCinema.AllSeats[13].seatIdentity)}
                    id={ThisCinema.AllSeats[13].seatsId.toString()} src="data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw==" ></img>

                  <img className="Seats-aSeat" onClick={(e) => seatClicked(ThisCinema.AllSeats[14].seatsId.toString(),ThisCinema.AllSeats[14].seatIdentity)}
                    id={ThisCinema.AllSeats[14].seatsId.toString()} src="data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw==" ></img>

                  <img className="Seats-aSeat" onClick={() => seatClicked(ThisCinema.AllSeats[15].seatsId.toString(),ThisCinema.AllSeats[15].seatIdentity)}
                    id={ThisCinema.AllSeats[15].seatsId.toString()} src="data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw=="></img>

                  <img className="Seats-aSeat" onClick={() => seatClicked(ThisCinema.AllSeats[16].seatsId.toString(),ThisCinema.AllSeats[16].seatIdentity )}
                    id={ThisCinema.AllSeats[16].seatsId.toString()} src="data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw=="></img>

                  <img className="Seats-aSeat" onClick={() => seatClicked(ThisCinema.AllSeats[17].seatsId.toString(), ThisCinema.AllSeats[17].seatIdentity)}
                    id={ThisCinema.AllSeats[17].seatsId.toString()} src="data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw=="></img>
               </div>

               <div id="Row_4">
                  <img className="Seats-aSeat Seats-aSeat-First" onClick={() => seatClicked(ThisCinema.AllSeats[18].seatsId.toString(), ThisCinema.AllSeats[18].seatIdentity)}
                    id={ThisCinema.AllSeats[18].seatsId.toString()} src="data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw=="></img>

                  <img className="Seats-aSeat" onClick={() => seatClicked(ThisCinema.AllSeats[19].seatsId.toString(),ThisCinema.AllSeats[19].seatIdentity)}
                    id={ThisCinema.AllSeats[19].seatsId.toString()} src="data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw==" ></img>

                  <img className="Seats-aSeat" onClick={(e) => seatClicked(ThisCinema.AllSeats[20].seatsId.toString(), ThisCinema.AllSeats[20].seatIdentity)}
                    id={ThisCinema.AllSeats[20].seatsId.toString()} src="data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw==" ></img>

                  <img className="Seats-aSeat" onClick={() => seatClicked(ThisCinema.AllSeats[21].seatsId.toString(), ThisCinema.AllSeats[21].seatIdentity)}
                    id={ThisCinema.AllSeats[21].seatsId.toString()} src="data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw=="></img>

                  <img className="Seats-aSeat" onClick={() => seatClicked(ThisCinema.AllSeats[22].seatsId.toString(),ThisCinema.AllSeats[22].seatIdentity)}
                    id={ThisCinema.AllSeats[22].seatsId.toString()} src="data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw=="></img>

                  <img className="Seats-aSeat" onClick={() => seatClicked(ThisCinema.AllSeats[23].seatsId.toString(),ThisCinema.AllSeats[23].seatIdentity)}
                    id={ThisCinema.AllSeats[23].seatsId.toString()} src="data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw=="></img>
               </div>
               
            </div> 
          </div>
        </div>
      </div>
      )
  }

  const seatClicked = (id:any, name:any) => { 

      let IDOfSeat = id;
      let result = window.getComputedStyle(document.getElementById(IDOfSeat),null).backgroundColor;
      if(result != "rgb(157, 70, 255)")
      {
        document.getElementById(IDOfSeat).style.backgroundColor = "#9d46ff";
        const items = SelectedSeat.concat(name);
        SetSelectedSeat(state => {
          state.push(name);
          return state;
        });
        console.log(items);
      }
      else
      {
        document.getElementById(IDOfSeat).style.backgroundColor = "transparent";
        let items = SelectedSeat;
        const index = items.indexOf(name,0)
        console.log(index);
        if (index > -1) {
          items.splice(index, 1);
       }
        SetSelectedSeat(items);
        console.log(items);
      }
    
   
  }

  //#region Routes
  const dynamicRoutes = [
    {
      name: "Movies",
      component: (
        <div id="AllViewsScroll">
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
          
          <h3 id="AMovieTypeRowIdentitier">Romance</h3>
          <ul id="AMovieItem">
          {AllRomanticMovies}
          </ul>

          <h3 id="AMovieTypeRowIdentitier">Fantasy and Sci-Fi</h3>
          <ul id="AMovieItem">
          {AllFantasyMovies}
          </ul>
          <br></br>
        </div>
      )
    },
    {
      name: "My Reservations",
      component: (
        <div id="AllViewsScroll">
          
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
        <div id="AllViewsNoScroll">
          <div id="AmovieViewInfo">

            <img src={GetMovieInfo?.poster} id="posterViewInfo"></img>

          <div id="MovieViewInformation">
            <h1 id="MovieTitleInformation">{GetMovieInfo?.title}</h1>
            <p id="MovieInformationPTags">• Movie Realsed year: {GetMovieInfo?.movieYear}</p>
            <p id="MovieInformationPTags">• Movie Runtime: {GetMovieInfo?.runtime}</p>
            <p id="MovieInformationPTags">• IMDB Rating: {GetMovieInfo?.imdbRating}</p>
            <p id="MovieInformationPTags">• Plot: {GetMovieInfo?.plot}</p>
            <button className="btn" type="button" onClick={() => GetCinemaInfo()}>Cinemas</button>
          </div>       
        </div>
        </div>
      )
    },
    {
      name: "ShowACinema",
      component: (
        <div id="AllViewsScroll">
          <ShowCinema></ShowCinema>
        </div>)
    },
  
  ]
    
  //#endregion
    
  //#region funtions
  const AmovieItemClicked = function (ID:number) { SetMovieToShowID(ID);}
  function GetCinemaInfo()
  {
     axios.get('https://localhost:44398/api/MoviePlayings/Movie/' + MovieToShowID).then(repsonseFromDB => {
      let Cinema: IACinema;
      Cinema = repsonseFromDB.data.cinema[0];
      console.log(Cinema);
      axios.get('https://localhost:44398/api/Seats/cinema/' + repsonseFromDB.data.cinema[0].cinemaId).then(allSeats => { 
        Cinema.AllSeats = allSeats.data;
        SetSeatsCinema(allSeats.data);
        SetCinema(Cinema);
        console.log(Cinema.AllSeats);
        setCurrentDynamic("ShowACinema");
      });
     });
  }

  
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