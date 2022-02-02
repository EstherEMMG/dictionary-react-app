import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${word}`);
  }

  function updateWordChange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={updateWordChange} />
        <button className="btn btn-primary">Search</button>
      </form>
    </div>
  );
}
