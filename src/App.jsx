import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

function App() {
  return (
    <>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Movie" element={<Movie />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
