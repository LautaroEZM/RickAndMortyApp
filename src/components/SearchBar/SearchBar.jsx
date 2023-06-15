import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
   const [id, setId] = useState([]);

  function handleChange(event) {
    setId(event.target.value);
  }

  function handleSubmit(event) {
      props.onSearch(id);
  }

  return (
    <div className={style.headerDiv}>
      <input
        className={style.searchCamp}
        type="search"
        value={id}
        onChange={handleChange}
      />
      <button className={style.btnSearch} onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
}
