import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director) => <li key={director.name}>{director.name + " " + director.movies}</li>)}
    </div>
  )
}

export default Directors;
