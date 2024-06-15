import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./componentes/home";
import "./app.css";
import { Nosotros } from "./componentes/nosotros";
import { Programas } from "./componentes/programas";
import { Biblioteca } from "./componentes/biblioteca";
import { Contactanos } from "./componentes/contactanos";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/nosotros" element={<Nosotros />}></Route>
        <Route path="/programas" element={<Programas />}></Route>
        <Route path="/biblioteca" element={<Biblioteca />}></Route>
        <Route path="/contactanos" element={<Contactanos />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
