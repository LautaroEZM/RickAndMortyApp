import React from "react";
import { useState } from "react";
import Card from "../Card/Card.jsx";
import style from "./Cards.module.css";
import SearchBar from "../SearchBar/SearchBar.jsx";
import characters from "../../data.js";

export default function Cards(props) {
  const [chars, setChars] = useState(characters);

  function onSearch(id) {
    if (id < 1 || id > 826 || id === undefined) {
      return window.alert("Tiene que elegir un valor entre 1 y 826");
    }
    const idCharacter = chars.find((char) => char.id == id);
    if (idCharacter) {
      window.alert("Ya existe este personaje entre las cartas");
    } else {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => res.json())
        .then((data) => setChars([...chars, data]));
    }
  }

  return (
    <div>
      <div className={style.container}><SearchBar onSearch={onSearch} /></div>

      <div className={style.cardContainer}>
        {chars.map((char, index) => {
          return <Card key={index} char={char} onClose={props.onClose} />;
        })}
      </div>
    </div>
  );
}
