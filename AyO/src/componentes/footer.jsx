import { MapPin, Phone, Mail } from "lucide-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export function Footer() {
  return (
    <>
      <footer>
        <div className="contactos">
          <div className="contacto">
            <div className="icon">
              <MapPin size={40} /> 
            </div>
            <div className="text">
              <h4>Direccio de Prueba</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
                odit.
              </p>
            </div>
          </div>

          <div className="contacto">
            <div className="icon">
              <Phone size={40} />
            </div>
            <div className="text">
              <h4>Telefono de Prueba</h4>
              <p>+504 XXXX-XXXX</p>
            </div>
          </div>
          <div className="contacto">
            <div className="icon">
              <Mail size={40} />
            </div>
            <div className="text">
              <h4>Correo de Prueba</h4>
              <p>correodeprueba@gmail.com</p>
            </div>
          </div>
        </div>
        <hr />


        <div className="footer_pt2">
       
       <div className="footer_pt2_content">
        <img src="src/img/logo.png" alt="" />
       </div>

       <div className="footer_pt2_content">
        <label>Buzon de Quejas</label>
       <div className="buzon">

        <div className="contacto_buzon_email">
<div className="contacto_buzon_email_icon"> <Mail size={40} /></div>
<div className="contacto_buzon_email_content">Correo@gmail.com</div>


        </div>
        <div className="contacto_buzon_numero">
          <div className="contacto_buzon_numero_icon"><Phone size={40} /></div>
          <div className="contacto_buzon_numero_content">504 XXXX-XXXX</div>
        </div>
       </div>
         
       </div>

       <div className="footer_pt2_content">
        <label >Siguenos</label>
        <div className="redes">
          <div className="link_redes">
            <a href="">
              <img src="https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png" alt="" />
            </a>
          </div>
          <div className="link_redes">
            <a href="">
              <img src="https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png" alt="" />
            </a>
          </div>
          <div className="link_redes">
            <a href="">
              <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-512.png" alt="" />
            </a>
          </div>
          <div className="link_redes">
            <a href="">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/1200px-LinkedIn_icon_circle.svg.png" alt="" />
            </a>
          </div>
        </div>

       </div>
        
        </div>
      
      
   
  
       
        <div
          className="text-center p-4"
          style={{ background: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="#">
            {" "}
            Alternativas y Oportunidades 2024
          </a>
        </div>
      </footer>
    </>
  );
}
