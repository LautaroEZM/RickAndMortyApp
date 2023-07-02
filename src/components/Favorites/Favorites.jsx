import { connect } from "react-redux";
import style from "./Favorites.module.css";
import Card from "../Card/Card.jsx"; // Importa el componente Card

function Favorites(props) {
    return (
        <div className={style.container}>

            {props.myFavorites.map((char) => (
                <Card key={char.id} char={char} />
            ))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    };
};

export default connect(mapStateToProps)(Favorites);