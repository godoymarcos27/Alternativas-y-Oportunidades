import { ArrowBigLeft } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

export function Nav(props) {
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
      <header id="nav">
        <div  className="logo">
          {" "}
          <Link to="/#nav" className="active">
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

      <div className="portada">
        <img src={props.img} alt="portada" />
        {/* <div className="portada-sombra"></div> */}
      </div>
    </>
  );
}
