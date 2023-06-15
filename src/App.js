import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Cards from "./components/Cards/Cards.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail";
import errorPage from "./components/404/404";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="contentContainer">
        <Routes>
          <Route path="/" />
          <Route path="/Cards" Component={Cards} />
          <Route path="/About" Component={About} />
          <Route path="/Detail/:id" Component={Detail} />
          <Route path="*" Component={errorPage} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
