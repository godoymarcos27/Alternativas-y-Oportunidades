import { Nav } from "./NAv";
import { Footer } from "./footer";
import { MapPin, Phone, Mail } from "lucide-react";

export function Contactanos() {
  return (
    <>
      <Nav img="https://img.freepik.com/fotos-premium/sitio-web-e-internet-contactenos-concepto-pagina-iconos-correo-electronico-chat-telefonico-simbolo-correo-telefonico-telefono-movil-pagina-sitio-web-contactenos-banner-web-amplio-espacio-copia-fondo-azul_256259-2730.jpg" />
      <h1 className="titulo-contactanos">CONTÁCTENOS</h1>
      <div data-aos="fade-up" data-aos-duration="1000" className="contactanos">
        <div className="contactos-contactanos">
          <div className="contacto-contactanos">
            <div className="icon-contactanos">
              <Phone size={40} />
            </div>
            <div className="text-contactanos">
              <h4>Telefono de Prueba</h4>
              <p>+504 XXXX-XXXX</p>
            </div>
          </div>

          <div className="contacto-contactanos">
            {" "}
            <div className="icon-contactanos">
              <Mail size={40} />
            </div>
            <div className="text-contactanos">
              <h4>Correo</h4>
              <p>correodeprueba@gmail.com</p>
            </div>
          </div>

          <div className="contacto-contactanos">
            {" "}
            <div className="icon-contactanos">
              <MapPin size={40} />
            </div>
            <div className="text-contactanos">
              <h4>Direccio de Prueba</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
                odit.
              </p>
            </div>
          </div>

          <div className="contacto-contactanos">
            {" "}
            <div className="icon-contactanos">
              <Phone size={40} />
            </div>
            <div className="text-contactanos">
              <h4>Telefono de Prueba</h4>
              <p>+504 XXXX-XXXX</p>
            </div>
          </div>
        </div>

        <div className="ubicacion">
          <iframe
            className="ubicacion"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d807.4137715071815!2d-87.2068381304889!3d14.104306899821175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDA2JzE1LjUiTiA4N8KwMTInMjIuMyJX!5e1!3m2!1ses!2shn!4v1721690959875!5m2!1ses!2shn"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer"
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
}
