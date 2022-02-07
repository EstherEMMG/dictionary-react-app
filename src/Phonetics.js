import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="phonetic">
      <a href={props.phonetic.audio} target="_blank">
        Listen
      </a>
      {props.phonetic.text}
    </div>
  );
}
