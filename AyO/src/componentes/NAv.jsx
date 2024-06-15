
import { Link } from 'react-router-dom'
export function Nav(props) {
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
        <div className="bars">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <nav className="nav-bar">
          <ul>
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
