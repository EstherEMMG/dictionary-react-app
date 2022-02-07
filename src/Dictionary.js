import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState(null);
  let [definitions, setDefinitions] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setDefinitions(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
    let pexelsApiKey =
      "563492ad6f91700001000001936fbcef4e724443803cd9a07f837412";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function updateWordChange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <div className="question">What word are you looking for?</div>
        <form onSubmit={search}>
          <input type="search" onChange={updateWordChange} />
          <div className="hint">Suggested words: tree, sky, laptop...</div>
        </form>
      </section>
      <Results results={definitions} />
      <Photos photos={photos} />
    </div>
  );
}
