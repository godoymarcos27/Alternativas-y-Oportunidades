import {ArrowBigLeft } from "lucide-react";
import { Link } from 'react-router-dom'
import React,{ useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'




export function Nav(props) {
   const [open_menu, setOpen_menu]= useState(false)
 

  const OpenMenu= ()=>{
 ;
  setOpen_menu(!open_menu)
}

useEffect(() => {
  AOS.init({ duration:1500 });
}, []);
  return (
    <>
      <header >
        <div className="logo">
          {" "}
          <Link to="/" className="active">
      
            {" "}
            <img src="src/img/logo.png" alt="LOGO" />{" "}
          
          </Link>
        </div>
        <div className="bars" onClick={OpenMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <nav className="nav-bar"  style={{ display: open_menu ? 'block' : '' }}>
          <ul>
            <li>
            <Link to="/"  className="active">Inicio</Link>
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
            <li className='donar'>
            <a href="https://wa.me/+50433653580" target='blank'>Donar</a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="portada">
    <img src={props.img} alt="portada"/>
    {/* <div className="portada-sombra"></div> */}

  </div>
  
    </>
  );
}
