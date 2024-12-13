import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Player from "./components/Player";
import Library from "./components/Library";
import Favourites from "./components/Favourites";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/library" element={<Library />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      <Player />
    </BrowserRouter>
  );
}

export default App;
