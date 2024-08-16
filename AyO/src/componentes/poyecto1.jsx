import { Nav } from "./NAv";
import { useState } from "react";
import { Footer } from "./footer";
import { Link } from "react-router-dom";
export function P1() {
  const [info, setInfo] = useState(true);
  const [info1, setInfo1] = useState(false);
  function motrari1() {
    setInfo(true);
    setInfo1(false);
  }
  function motrari2() {
    setInfo(false);
    setInfo1(true);
  }
  return (
    <>
      <Nav img="https://www.udep.edu.pe/hoy/wp-content/uploads/sites/49/2019/09/48602822407_953b2b62e6_o-Large.jpg" />
      <h1>Lorem, ipsum. Opcion 1</h1>
      <p style={{ padding: "1rem", textAlign: "justify" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis et,
        non natus corporis tenetur ducimus ut, veritatis nam ipsa quaerat autem
        beatae nemo quae. Veniam impedit voluptas tempora voluptate deserunt
        quos suscipit eligendi non id? Voluptatem, neque laborum vero saepe,
        inventore velit aspernatur, cumque eligendi culpa quas possimus earum a.
        Molestias qui vitae eum vel? Repellat incidunt voluptatum, voluptate
        eius inventore molestias labore at eaque dolor a quis nobis praesentium
        exercitationem sit veritatis quibusdam, voluptas laudantium enim ea
        deserunt fugit esse consectetur, optio doloribus. Impedit cupiditate
        sequi distinctio repellat, expedita voluptatum quasi omnis consectetur
        earum facilis reprehenderit, dignissimos voluptate. Illum excepturi
        optio accusantium, odio minus perferendis quae sunt fugit facilis ipsum
        laboriosam aspernatur in. Praesentium facilis quia aut dolor nisi hic
        repellat qui, ipsum aliquid ducimus architecto, eveniet ab, velit
        sapiente aperiam? Debitis dolores commodi at amet delectus ipsum quod
        consectetur magnam vero officiis, laudantium voluptate a nobis
        laboriosam voluptas.
      </p>
      <h1>Lorem, ipsum. Opcion 2</h1>
      <button
        className="proyectos"
        style={{ width: "25rem" }}
        onClick={motrari1}
      >
        {" "}
        {info ? "" : ""}Proyecto1
      </button>
      <button
        className="proyectos"
        style={{ width: "25rem" }}
        onClick={motrari2}
      >
        {" "}
        {info1 ? "" : ""}Proyecto2
      </button>
      <button className="proyectos" style={{ width: "25rem" }}>
        Proyecto1
      </button>

      {info && (
        <p style={{ padding: "5rem" }}>
          {" "}
          <b>Proyecto1</b> Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nam dignissimos consectetur accusantium, quod omnis placeat.
          Quod excepturi eaque aspernatur tempore, ea maiores fugit placeat quia
          vel nobis assumenda. Consequuntur modi doloremque ut aliquid,
          explicabo id adipisci voluptatibus nihil porro ipsum provident
          excepturi impedit? Tenetur aliquam nemo, molestias error facilis
          beatae.
        </p>
      )}

      {info1 && (
        <p style={{ padding: "5rem" }}>
          {" "}
          <b>Proyecto2</b> Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nam dignissimos consectetur accusantium, quod omnis placeat.
          Quod excepturi eaque aspernatur tempore, ea maiores fugit placeat quia
          vel nobis assumenda. Consequuntur modi doloremque ut aliquid,
          explicabo id adipisci voluptatibus nihil porro ipsum provident
          excepturi impedit? Tenetur aliquam nemo, molestias error facilis
          beatae.
        </p>
      )}


      <h1>Lorem, ipsum. Opcion 3</h1>
      
      <div className="proyectos_mostrar">
        <div   className="proyectos_mostrar_proyecto">
          {" "}
          <Link to="/proyestos_descr" className="active ">
          <img
            src="https://todoingenierias.com/wp-content/uploads/colaboracion-con-ongs-en-conservacion.jpg"
            alt=""
          /></Link>
        </div>
        <div   className="proyectos_mostrar_proyecto">
          {" "}
          <img
            src="https://d34ad2g4hirisc.cloudfront.net/volunteer_positions/photos/000/045/998/thumb/c5d1220b28eed75c0d6e3c11a5355b15.jpg"
            alt=""
          />
        </div>
        <div className="proyectos_mostrar_proyecto">
          {" "}
          
          
          <img
            src="https://news.microsoft.com/wp-content/uploads/prod/sites/61/2023/03/First-Lego-League-en-CEIP-Asturias-Vallecas-1-960x640.jpg"
            alt=""
          />
        </div>
      </div>
     
      <Footer />
    </>
  );
}
