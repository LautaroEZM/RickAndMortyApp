import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Cards from "./components/Cards/Cards.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail";
import Form from "./components/Forms/Forms";
import Favorites from "./components/Favorites/Favorites";
import axios from "axios";

function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(data);
       access && navigate('/Cards');
    });
 }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="App">
      {isHomePage ? null : <NavBar />}
      <div className="contentContainer">
        <Routes>
          <Route path="/" element={<Form login={login} />} />
          <Route path="/Cards" element={<Cards />} />
          <Route path="/About" element={<About />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/Detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
