import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState(null);
  let [definitions, setDefinitions] = useState(null);

  function handleResponse(response) {
    setDefinitions(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateWordChange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <div className="title">Dictionary</div>
        <div className="question">What word are you looking for?</div>
        <form onSubmit={search}>
          <input type="search" onChange={updateWordChange} />
          <div className="hint">Suggested words: tree, sky, laptop...</div>
        </form>
      </section>
      <Results results={definitions} />
    </div>
  );
}
