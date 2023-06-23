import style from "./NavBar.module.css";
import { Link, } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div className={style.NavBar}>
      <div id="navegador">
        <ul>
          
          <Link to="/Cards"><button className={style.navButton}>CARDS</button></Link>
          <Link to="/Favorites"><button className={style.navButton}>FAVS</button></Link>
          <Link to="/About"><button className={style.navButton}>ABOUT</button></Link>
          <button className={style.navLogOut}>LOG OUT</button>
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