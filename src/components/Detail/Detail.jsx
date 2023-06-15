import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Detail.module.css";

export default function Detail(props) {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.container}>
      <div className={style.textName}>{character.name}</div>
      <div className={style.inContainer}>
        <div className={style.leftContainer}>
          <div className={style.textStatus}>
            <p>{`Status: ${character.status}`}</p>
          </div>
          <div className={style.textStatus}>
            <p>{`Species: ${character.species}`}</p>
          </div>
          <div className={style.textStatus}>
            <p>{`Gender: ${character.gender}`}</p>
          </div>
          <div className={style.textStatus}>
            <p>{`Origin: ${
              character.origin && character.origin.name
                ? character.origin.name
                : "Unknown"
            }`}</p>
          </div>
          <div className={style.textStatus}>
            <p>{`Location: ${
              character.origin && character.origin.name
                ? character.location.name
                : "Unknown"
            }`}</p>
          </div>
        </div>
        <div className={style.rightContainer}>
          <div className={style.imgContainer}>
            <img className={style.profileImg} src={character.image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

//if(character.origin && character.origin.name) {return character.origin.name}
