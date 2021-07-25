import React from "react";
import { actors } from "../data";

function Actors() {
  return(
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => <li key={actor.name}>{actor.name + " " + actor.movies}</li>)}
    </div>
  )
}

export default Actors;
