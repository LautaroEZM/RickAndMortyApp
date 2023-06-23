import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../Redux/actions";
import { useState, useEffect } from "react";

function Card(props) {

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.removeFav(props.char.id);
    } else {
      setIsFav(true);
      props.addFav(props.char)
    }
  }

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.char.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites, props.char.id]);

  return (

    <div className={style.card} key={props.char.id}>
      
      {
        isFav ? (
          <button onClick={handleFavorite} className={style.btnFav}>❤️</button>
        ) : (
          <button onClick={handleFavorite} className={style.btnFav}>🤍</button>
        )
      }
      <Link to={`/detail/${props.char.id}`}><div className={style.textName}>{props.char.name}</div></Link> {/*agregar un <p></p> y pasar el link a ese lugar*/}
      <div className={style.imgContainer}><img className={style.profileImg} src={props.char.image} alt="" /></div>
      <div className={style.textStatus}>{`status: ${props.char.status}`}</div>
      <div className={style.textContent}>{`this character is a ${props.char.gender} of the ${props.char.species} race.`}</div>
      <div className={style.botContainer}></div>

    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character))
    },
    removeFav: (id) => {
      dispatch(removeFav(id))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Card);