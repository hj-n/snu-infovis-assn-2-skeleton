import React from "react";
import Mainplot from "./components/Mainplot";

import movies from "./data/movie.json";

import "./App.css";


function App() {

  const name = "Hyeon Jeon";
  const studentNum = "2020-2XXXX";

  const nominal = ["genre", "creative_type", "source"];
  const ordinal = ["release", "rating"];
  const quantitative = ["budget", "us_gross", "worldwide_gross", "rotten_rating", "imdb_rating", "imdb_votes"];
  
  const width = 500;
  const height = 350;
  const margin = 35;
  const pointSize = 3;
  const maxPointSize = 10;

  return (
    <div className="App">
      <div style={{display: "flex"}}>
        <h1 style={{marginRight: 10}}>
        {"Assignment #2 /"}
        </h1>
        <h2 style={{marginTop: 25}}>
          {name + " (" + studentNum + ")"}
        </h2>
      </div>
    </div>
  );
}

export default App;
