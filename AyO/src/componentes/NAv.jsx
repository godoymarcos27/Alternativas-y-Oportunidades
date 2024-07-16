
import { Link } from 'react-router-dom'
import React,{ useState } from 'react';




export function Nav(props) {
   const [open_menu, setOpen_menu]= useState(false)
  const OpenMenu= ()=>{
 ;
  setOpen_menu(!open_menu)
}
  return (
    <>
      <header>
        <div className="logo">
          {" "}
          <a href="index.html">
            {" "}
            <img src="src/img/logo.png" alt="LOGO" />{" "}
          </a>
        </div>
        <div className="bars" onClick={OpenMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <nav className="nav-bar">
          <ul className= {open_menu ? 'open' : ''}>
            <li>
            <Link to="/" className="active">Inicio</Link>
            </li>

            <li>
            <Link to="/nosotros">Nosotros</Link>
            </li>

            <li>
            <Link to="/programas">Programas y Proyectos</Link>
            </li>

            <li>
            <Link to="/biblioteca">Biblioteca</Link>
            </li>

            <li>
            <Link to="/contactanos">Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="portada">
    <img src={props.img} alt="portada"/>
    <div className="portada-sombra"></div>

  </div>

    </>
  );
}
