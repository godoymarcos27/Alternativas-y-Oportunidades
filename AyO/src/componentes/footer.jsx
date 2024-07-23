import { MapPin, Phone, Mail } from "lucide-react";
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
