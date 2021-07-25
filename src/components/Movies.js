import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => <div key={movie.title}>{movie.title + " " + movie.time}<ul><li key={movie.genres}>{movie.genres}</li></ul></div> )}
    </div>
  )
}

export default Movies;
