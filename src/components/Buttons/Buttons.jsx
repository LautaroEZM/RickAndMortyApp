import style from "./Buttons.module.css";

export function ButtonClose(props) {
  return <button className={style.btnClose}>X</button>;
}

export function ButtonFav(props) {
    return <button className={style.btnFav}>♥</button>;
  }
  