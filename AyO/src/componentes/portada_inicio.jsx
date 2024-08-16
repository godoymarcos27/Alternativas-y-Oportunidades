
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

export function Slider() {
    const [open_menu, setOpen_menu] = useState(false);

    const OpenMenu = () => {
      setOpen_menu(!open_menu);
    };
  
    useEffect(() => {
      AOS.init({ duration: 1500 });
    }, []);
  
    const alert_donar = () => {
     Swal.fire({
      imageUrl: "https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png",
      text: "Serás redirigido a un chat de WhatsApp para más detalles sobre la donación que deseas realizar. ¿Estás seguro de que quieres continuar?",
      showCancelButton: true,
      allowOutsideClick: false,
      confirmButtonText: 'Sí, continuar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirige a la ruta de WhatsApp
        window.open("https://wa.me/+50433653580", "_blank");
      }
    });
    };
  return (
    <>
     <header>
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

        <nav className="nav-bar" style={{ display: open_menu ? "block" : "" }}>
          <ul>
            <li>
              <Link to="/" className="active">
                Inicio
              </Link>
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
            <li className="donar">
              <a onClick={alert_donar} href="#" target="blank">
                Donar
              </a>
            </li>
          </ul>
        </nav>
      </header>

  <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
      <img src="./src/img/home-portada.jpeg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="https://comosurgen.com/wp-content/uploads/descubre-como-surgen-las-ong-y-su-impacto-en-la-sociedad.jpg" className="d-block w-100 "  alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="https://dkv.es/corporativo/sites/default/files/2022-11/que%20son%20las%20ong%20funcionamiento.jpg" className="d-block w-100"  alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      
</>
  )
}
