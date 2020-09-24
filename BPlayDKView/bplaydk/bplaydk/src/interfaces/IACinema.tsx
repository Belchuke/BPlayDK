import React from "react";
import { IASeat } from "./IASeat";

export interface IACinema{
  cinemaId: number,
  movieId: number,
  moviePlayingId: number,
  amountOfSeats: number,
  cinemaName: string, 
  AllSeats: Array<IASeat>,
}