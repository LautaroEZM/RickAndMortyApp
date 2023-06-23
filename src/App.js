import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Cards from "./components/Cards/Cards.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail";
import Form from "./components/Forms/Forms";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "ejemplo@gmail.com";
  const PASSWORD = "test123";

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      return navigate("/Cards");
    }
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
