import { Nav } from "./NAv";

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
            
            Sobre Nosotros
          </div>
          <h3>Titulo</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum necessitatibus dolor ex, explicabo repudiandae, error qui cumque deserunt perspiciatis, tempora id tenetur. Illo adipisci veritatis, nobis ex nesciunt dolorum repellat itaque aperiam exercitationem velit, nulla ut vero reprehenderit numquam deleniti quis, magni quas? Iusto, libero quibusdam! Consectetur totam adipisci voluptas laborum praesentium iste doloremque perspiciatis voluptate velit necessitatibus sapiente nam aliquid nostrum sunt esse, autem eligendi dolorum facilis quod unde facere enim aperiam modi est. Culpa quia alias repellendus quae non sint veritatis quod minus consequatur harum officia, dolorem, molestiae quaerat placeat exercitationem et tempore accusantium eum? Laborum, a praesentium?
          </p>
        </div>
      </div>


    

      {/* <div className="portada-sombra">
<h1 className="portada-titulo">Alternativas y Oportunidades</h1>

  </div> */}
    </>
  );
}
