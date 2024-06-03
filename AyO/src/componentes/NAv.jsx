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
              <a href="index.html" className="active">
                {" "}
                Inicio
              </a>
            </li>

            <li>
              <a href="nosotros.html"> Nosotros</a>
            </li>

            <li>
              <a href="Programas_Proyectos.html">Programas y Proyectos</a>
            </li>

            <li>
              <a href="Biblioteca.html">Biblioteca</a>
            </li>

            <li>
              <a href="Contacto.html">Contacto</a>
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
