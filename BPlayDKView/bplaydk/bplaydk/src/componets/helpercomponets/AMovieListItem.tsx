import React from 'react';
import { IAMovie } from '../../interfaces/IAMovie';
import './AMovieListItem.css';

const AMovieListItem = (param: IAMovie) => {  

  
  return (
    <div className="container">
        <img src={param.poster} id="PosterImg"></img>
    </div>
  )
}

export default AMovieListItem;
