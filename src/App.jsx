// App.jsx
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle"
import './App.css'; // Assuming you have additional custom styles
import { BrowserRouter,Router,Route, Routes } from "react-router-dom";
import Home from "./page/home";
import Project from "./page/projects";
import Countaut from "./page/CountactMe";

function App() {
    return (
        <>
        <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/ContactMe" element={<Countaut />} />
        </Routes>
        </BrowserRouter>
        
        </>
    );
}

export default App;
