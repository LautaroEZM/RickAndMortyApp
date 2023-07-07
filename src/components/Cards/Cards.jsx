import React, { useState, useEffect } from "react";
import Card from "../Card/Card.jsx";
import style from "./Cards.module.css";
import SearchBar from "../SearchBar/SearchBar.jsx";
import characters from "../../data.js";
import axios from "axios";

export default function Cards() {
  const [chars, setChars] = useState(characters);

  // Nuevo efecto para cargar las cartas desde el almacenamiento local al cargar el componente
  useEffect(() => {
    const storedChars = localStorage.getItem("characters");
    if (storedChars) {
      setChars(JSON.parse(storedChars));
    }
  }, []);

  // Nuevo efecto para guardar las cartas actualizadas en el almacenamiento local cada vez que cambien
  useEffect(() => {
    localStorage.setItem("characters", JSON.stringify(chars));
  }, [chars]);

  function onSearch(id) {
    if (isNaN(id) || id < 1 || id > 826 || id === undefined) {
      return window.alert("You must choose a valid numeric value between 1 and 826.");
    }

    // Convertir el ID a número antes de la comparación
    const idNumber = parseInt(id);

    const idCharacter = chars.find((char) => char.id === idNumber);
    if (idCharacter) {
      window.alert("This character already exists among the cards.");
    } else {
      axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
        .then((response) => { 
          console.log({response: response.data});
          return response.data })
        .then((data) => setChars((prevChars) => [...prevChars, data]));
    }
  }

  return (
    <div>
      <div className={style.container}>
        <SearchBar onSearch={onSearch} />
      </div>

      <div className={style.cardContainer}>
        {chars.map((char, index) => {
          return <Card key={index} char={char} />;
        })}
      </div>
    </div>
  );
}