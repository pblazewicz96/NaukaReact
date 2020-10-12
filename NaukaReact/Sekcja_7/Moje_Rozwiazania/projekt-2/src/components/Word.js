import React from "react";
import "./Word.css";

const Word = (props) => (
  <li>
    Słowo po angielsku: <strong>{props.english}</strong> Tłumaczenie na polski:{" "}
    <strong>{props.polish}</strong>
  </li>
);

export default Word;
