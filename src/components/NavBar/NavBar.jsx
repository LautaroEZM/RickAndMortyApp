import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import Cards from "../Cards/Cards.jsx";

export default function NavBar(props) {
  return (
    <div className={style.NavBar}>
      <div id="navegador">
        <ul>
          <Link><button className={style.navButton}>LOGIN</button></Link>
          <Link to="/Cards"><button className={style.navButton}>CARDS</button></Link>
          <Link><button className={style.navButton}>FAVS</button></Link>
          <Link to="/About"><button className={style.navButton}>ABOUT</button></Link>
        </ul>
      </div>

      
    </div>
  );
}

/*
<Routes>
        <Route path="/Cards" Component={Cards} />
</Routes>
      */