import { Nav } from "./NAv";
import { Footer } from "./footer";
import Swal from "sweetalert2";



function alerta_t1() {
  Swal.fire({
      title: "Titulo",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim quia consequatur dolorum assumenda possimus quis architecto eum, ullam, officiis odit velit ipsum laboriosam odio modi? Commodi culpa nesciunt ducimus molestias adipisci quam officia quos, dolorem quo voluptatem earum velit alias quisquam est praesentium veniam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim quia consequatur dolorum assumenda possimus quis architecto eum, ullam, officiis odit velit ipsum laboriosam odio modi? Commodi culpa nesciunt ducimus molestias adipisci quam officia quos, dolorem quo voluptatem earum velit alias quisquam est praesentium veniam!",
      imageUrl: "https://skitterphoto.com/photos/skitterphoto-11936-default.jpg",
      imageWidth: 250,
      imageHeight: 200,
      showCloseButton: true,
      imageAlt: "Custom image"
      
    });

    
}


export function Home() {
  return (


    
    <>
      <Nav img="./src/img/home-portada.jpeg" />

      <div className="boxes">
        <div className="box">
          <div className="box_img">
            <img
              src="https://helphim-html.wrmlabs.com/images/education.svg"
              alt=""
            />
          </div>
          <h3>Lorem, ipsum.</h3>
        </div>
        <div className="box">
          <div className="box_img">
            <img
              src="https://helphim-html.wrmlabs.com/images/icons_home.svg"
              alt=""
            />
          </div>
          <h3>Lorem, ipsum.</h3>
        </div>
        <div className="box">
          <div className="box_img">
            <img
              src="https://helphim-html.wrmlabs.com/images/pot-of-food.svg"
              alt=""
            />
          </div>
          <h3>Lorem, ipsum.</h3>
        </div>
        <div className="box">
          <div className="box_img">
            <img
              src="https://helphim-html.wrmlabs.com/images/medicine-chest.svg"
              alt=""
            />
          </div>
          <h3>Lorem, ipsum.</h3>
        </div>
      </div>

      <div className="titulo">
        <span className="line"></span>
        <h1>Bienvenido a Alternativas y Oportunidades</h1>
        <span className="line"></span>
      </div>

      <div className="home-card">
        <div className="home-img">
          <img
            src="https://www.planinternational.org.pe/hubfs/01_img_portada_blog_24.jpg#keepProtocol"
            alt=""
          />
        </div>

        <div className="home-content">
          <div className="home-titulo">
            Hemos estado salvando y cambiando vidas
          </div>
          {/* <h3>Titulo</h3> */}
          <p>
            Somos una ONG que trabaja en Tegucigalpa, Honduras. Estamos ubicados
            en el centro de Tegucigalpa, pero trabajamos con los mercados y las
            comunidades de todo el capital. El proyecto nació a partir de un
            estudio realizado por la Universidad de Tulane (EE.UU.) en 1990 que
            pretende conocer más acerca de la condición de vida de los niños de
            la calle en Tegucigalpa. El estudio encontró que muchos niños
            trabajan en el sector informal o la mendicidad en la calle con sus
            derechos humanos básicos que se les niega sistemáticamente. A partir
            de estos hallazgos se creó el proyecto Alternativas y Oportunidades.
            Por favor lea nuestra página de Misión / Visión para averiguar más
            sobre lo que hacemos. Esperamos que usted disfrute de aprender más
            acerca de nuestro trabajo por mirar nuestra página web – usted puede
            encontrar información actualizada sobre los testimonios de los
            participantes y una galería de fotos. Si usted desea obtener más
            información no dude en contactar con nosotros. Los nuevos donantes
            son, por supuesto, siempre es bienvenido y necesario. Así que por
            favor visite nuestra página de donaciones o, si desea trabajar con
            nosotros a largo plazo, por favor póngase en contacto con nosotros a
            través de correo electrónico
          </p>
        </div>
      </div>

      <div className="cajas_data">
        <div className="data">
          <img src="./src/img/1.png" alt="" />
        </div>
        <div className="data">
          <img src="./src/img/2.png" alt="" />
        </div>
        <div className="data">
          <img src="./src/img/3.png" alt="" />
        </div>
        <div className="data">
          <img src="./src/img/4.png" alt="" />
        </div>
      </div>

 <h1>Galleria</h1>
   
 <div className="galeria_home">
     
  <div className="container_galery">
          <img
            src="https://skitterphoto.com/photos/skitterphoto-11936-default.jpg"
            alt=""
          />
          <div class="overlay">Titulo <br /> <button onClick={alerta_t1}>Leer más información</button></div>
          </div>
          <div className="container_galery">
          <img
            src="https://skitterphoto.com/photos/skitterphoto-12183-default.jpg"
            alt=""
            
          />
          <div class="overlay">Titulo <br /> <button>Leer más información</button></div>
          </div>
          <div className="container_galery">
          <img
            src="https://skitterphoto.com/photos/skitterphoto-9740-default.jpg"
            alt=""
          />
            <div class="overlay">Titulo <br /> <button>Leer más información</button></div>
          </div>
          <div className="container_galery">
          <img
            src="https://skitterphoto.com/photos/skitterphoto-4647-default.jpg"
            alt=""
          />
            <div class="overlay">Titulo <br /> <button>Leer más información</button></div>
          </div>
          <div className="container_galery">
          <img
            src="https://skitterphoto.com/photos/skitterphoto-4627-default.jpg"
            alt=""
          />
            <div class="overlay">Titulo <br /> <button>Leer más información</button></div>
          </div>
          <div className="container_galery">
          <img
            src="https://skitterphoto.com/photos/skitterphoto-4381-default.jpg"
            alt=""
          />
            <div class="overlay">Titulo <br /> <button>Leer más información</button></div>
          </div>
          <div className="container_galery">
          <img
            src="https://skitterphoto.com/photos/skitterphoto-3997-default.jpg"
            alt=""
          />
            <div class="overlay">Titulo <br /> <button>Leer más información</button></div>
          </div>
          <div className="container_galery">
          <img
            src="https://skitterphoto.com/photos/skitterphoto-4625-default.jpg"
            alt=""
          />
            <div class="overlay">Titulo <br /> <button>Leer más información</button></div>
       </div>
      </div>

      
    
      <Footer />

      {/* <div className="portada-sombra">
<h1 className="portada-titulo">Alternativas y Oportunidades</h1>

  </div> */}
    </>
  );
}
