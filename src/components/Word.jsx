import React, { useEffect, useState } from "react";
import "./Word.css";

const Word = ({ word }) => {
  const [selectedWord, setSelectedWord] = useState(false);
  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.trim()}`, {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => console.log(word, data));
  }, [word]);

  return (
    <span
      className={`word ${selectedWord ? "selected" : ""}`}
      onClick={() => setSelectedWord(!selectedWord)}
    >{`${word}`}</span>
  );
};

export default Word;
