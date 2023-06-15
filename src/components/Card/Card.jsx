import { Link } from "react-router-dom";
import style from "./Card.module.css";
import {ButtonClose, ButtonFav} from "../Buttons/Buttons.jsx";

export default function Card(props) {
  return (
    
    <div className={style.card} key={props.char.id}>
      <ButtonClose/>
      <ButtonFav/>
      <Link to={`/detail/${props.char.id}`}><div className={style.textName}>{props.char.name}</div></Link>
      <div className={style.imgContainer}><img className={style.profileImg} src={props.char.image} alt="" /></div>
      <div className={style.textStatus}>{`[status: ${props.char.status}]`}</div>
      <div className={style.textContent}>{`this character is a ${props.char.gender} of the ${props.char.species} race.`}</div>
      <div className={style.botContainer}></div>
      
    </div>
  );
}
