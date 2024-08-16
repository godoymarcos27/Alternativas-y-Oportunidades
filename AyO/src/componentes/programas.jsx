import { Nav } from "./NAv";
import { Footer } from "./footer";
import Swal from "sweetalert2";
import { Link } from 'react-router-dom'

function alerta_t1() {
  Swal.fire({
      title: "Proyecto 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim quia consequatur dolorum assumenda possimus quis architecto eum, ullam, officiis odit velit ipsum laboriosam odio modi? Commodi culpa nesciunt ducimus molestias adipisci quam officia quos, dolorem quo voluptatem earum velit alias quisquam est praesentium veniam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim quia consequatur dolorum assumenda possimus quis architecto eum, ullam, officiis odit velit ipsum laboriosam odio modi? Commodi culpa nesciunt ducimus molestias adipisci quam officia quos, dolorem quo voluptatem earum velit alias quisquam est praesentium veniam!",
      imageUrl: "https://www.clarin.com/img/2024/02/19/xt29BsK6g_600x600__1.jpg",
      imageWidth: 250,
      imageHeight: 200,
      showCloseButton: true,
      imageAlt: "Custom image"
      
    });

    
}


export function Programas() {
  return (
    <>
      <Nav img="https://www.recursosculturales.com/wp-content/uploads/2016/07/recursos-gratuitos-ONGs.jpeg" />

      <section data-aos="zoom-in" className="programas">
        <div className="programa">
          <div className="img_programa">
            <img
              src="https://www.centroeleia.edu.mx/blog/wp-content/uploads/2016/11/AdobeStock_115268768-2.jpg"
              alt=""
            />
          </div>
          <div className="content_programa">
            <h1> Atención psicológica</h1>
            <p>
              Tenemos consejeros que pueden ofrecer para apoyar a los padres y
              los niños que están lidiando con problemas emocionales difíciles.
              También ofrecemos clases para mejorar la autoestima de nuestros
              alumnos, la motivación, etc.
            </p>
            
            <div className="link_proyectos">
              <div className="_proyectos">
       <Link to="/poyecto1" className="active " style={{color:"#4b94a6"}}>Ver Proyectos del Programa</Link>
          </div>
            </div> 
          </div>
         
        </div>
      </section>
<hr style={{ margin:"auto" , width:"97%"}}/>
      <section data-aos="zoom-in" className="programas">
        <div className="programa">
          <div className="img_programa">
            <img
              src="https://guiaegreso.org.ar/wp-content/uploads/2018/11/clubjoven.jpg"
              alt=""
            />
          </div>
          <div className="content_programa">
            <h1> Club de jovenes</h1>
            <p>
            Este equipo trabaja con jóvenes para hablar de temas de salud preventiva, y sus derechos humanos. También trabaja con ellos para enseñarles habilidades de liderazgo.
            </p>
            
            <div className="link_proyectos">
              <div className="_proyectos">
       <Link to="/poyecto1" className="active " style={{color:"#4b94a6"}}>Ver Proyectos del Programa</Link>
          </div>
            </div>
          </div>
        </div>
      </section>
      <hr style={{ margin:"auto" , width:"97%"}}/> 
      <section data-aos="zoom-in" className="programas">
        <div className="programa">
          <div className="img_programa">
            <img
              src="https://venadotuerto.gob.ar/wp-content/uploads/2024/02/APOYO..jpg"
              alt=""
            />
          </div>
          <div className="content_programa">
            <h1> Apoyo Escolar</h1>
            <p>
            Apoyo a los estudiantes en sus estudios generales, proporcionando tutorías, clases de refuerzo y materiales de aprendizaje.
            </p>
            
            <div className="link_proyectos">
              <div className="_proyectos">
       <Link to="/poyecto1" className="active " style={{color:"#4b94a6"}}>Ver Proyectos del Programa</Link>
          </div>
            </div>
          </div>
        </div>
      </section>
      <hr style={{ margin:"auto" , width:"97%"}}/>

      <section data-aos="zoom-in" className="programas">
        <div className="programa">
          <div className="img_programa">
            <img
              src="https://www.bayardeducacion.com/wp-content/uploads/2021/02/13893-aprender-a-ser-padres-2.jpg.webp"
              alt=""
            />
          </div>
          <div className="content_programa">
            <h1>Escuela de madres y pardres</h1>
            <p>
            Este equipo se centra en el trabajo con los padres y madres en temas como: salud preventiva, los derechos y el liderazgo, alfabetización de adultos, etc. También ayudan a los padres a fortalecer su negocio y el apoyo económico de su familia.
            </p>
            
            <div className="link_proyectos">
              <div className="_proyectos">
       <Link to="/poyecto1" className="active " style={{color:"#4b94a6"}}>Ver Proyectos del Programa</Link>
          </div>
            </div>
          </div>
        </div>
      </section>
      <hr style={{ margin:"auto" , width:"97%"}}/>

      <section data-aos="zoom-in" className="programas">
        <div className="programa">
          <div className="img_programa">
            <img
              src="https://diarioenfermero.es/wp-content/uploads/2021/02/enfermera-escolar-covid-1.jpg"
              alt=""
            />
          </div>
          <div className="content_programa">
            <h1> Educación en salud</h1>
            <p>
            La enseñanza de los padres y los niños temas de salud por ejemplo, cómo lavarse las manos, la forma de cepillarse los dientes.
            </p>
            
            <div className="link_proyectos">
              <div className="_proyectos">
       <Link to="/poyecto1" className="active " style={{color:"#4b94a6"}}>Ver Proyectos del Programa</Link>
          </div>
            </div>
          </div>
        </div>
      </section>
      <hr style={{ margin:"auto" , width:"97%"}}/>
      <section data-aos="zoom-in" className="programas">
        <div className="programa">
          <div className="img_programa">
            <img
              src="https://cdn-3.expansion.mx/dims4/default/c93745d/2147483647/strip/true/crop/1200x801+0+0/resize/1800x1202!/format/webp/quality/80/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Fb6%2Fbe%2F1d4f2ec14e33987c16d29f14a5db%2Fconsulta-medica-istock-1319031310.jpeg"
              alt=""
            />
          </div>
          <div className="content_programa">
            <h1>Atencion medica</h1>
            <p>
            Tenemos un médico calificado y una enfermera para atender a los participantes que necesitan atención médica.
            </p>
            
            <div className="link_proyectos">
              <div className="_proyectos">
       <Link to="/poyecto1" className="active " style={{color:"#4b94a6"}}>Ver Proyectos del Programa</Link>
          </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
