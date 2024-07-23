import { Nav } from "./NAv";
import { Footer } from "./footer";
import React, { useState } from "react";
export function Nosotros() {
  const [show_hiden_mision, setshow_hiden_mision] = useState(true);
  const [show_hiden_vision, setshow_hiden_vision] = useState(false);
  const [show_hiden_valores, setshow_hiden_valores] = useState(false);

  const mostrar_ocultar_mision = () => {
    setshow_hiden_mision(true);
    setshow_hiden_vision(false);
    setshow_hiden_valores(false);
  };
  const mostrar_ocultar_vision = () => {
    setshow_hiden_vision(true);
    setshow_hiden_valores(false);
    setshow_hiden_mision(false);
  };
  const mostrar_ocultar_valores = () => {
    setshow_hiden_valores(true);
    setshow_hiden_mision(false);
    setshow_hiden_vision(false);
  };

  return (
    <>
      <Nav img="https://media.istockphoto.com/id/1203758034/es/foto/gente-de-negocios-trabajando-en-la-oficina-por-la-noche.jpg?s=1024x1024&w=is&k=20&c=sRkyvcFGoA7VXHG262Nfe3VeYRpgoLuRm8ZPMTu7TtU=" />

      <div className="quienes_somos">
        <div className="img-quienes_somos">
          <img
            src="https://skitterphoto.com/photos/skitterphoto-4252-default.jpg"
            alt=""
          />
        </div>
        <div className="content_quienes_somos">
          <div className="titulo_quienes_somos"> Quiénes somos</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga a
            architecto autem impedit tenetur reprehenderit, nihil aspernatur
            sapiente error numquam iusto, quos repudiandae qui est officiis.
            Cumque natus velit totam quos iste neque hic voluptatum culpa a,
            distinctio odit consectetur quis necessitatibus, excepturi vitae
            corrupti officia enim? Delectus praesentium vel commodi ipsa sit
            reprehenderit. Ea cumque laboriosam molestias reiciendis, minima
            eveniet qui facere consequatur. Assumenda dicta reprehenderit
            sapiente deserunt quam! Reprehenderit quos enim dicta dignissimos.
            Repellat culpa possimus obcaecati nesciunt cumque cupiditate
            sapiente nemo officia doloremque similique eveniet nihil, tempora,
            placeat recusandae unde asperiores autem eum. Praesentium magnam
            perspiciatis veritatis! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Voluptatum blanditiis fuga laboriosam laudantium
            maxime suscipit praesentium ad fugiat tempore, omnis, vitae fugit,
            provident odio totam cumque laborum veniam quos eos veritatis?
            Repellendus nulla asperiores quibusdam ducimus possimus soluta
            tempora ut veritatis molestias dicta laudantium, quod sit illum
            quaerat! Ipsum, pariatur!
          </p>
        </div>
      </div>

      <h1>Qué hacemos</h1>
      <div className="about">
        <div data-aos="zoom-out-up" className="about-cajas">
          <div className="about_img">
            <img
              src="https://emoralesvet.com/wp-content/uploads/2015/12/icono-que-hacemos.png"
              alt=""
            />
          </div>
          <div className="content_about">
            {" "}
            <h3>Lorem.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, at?
            </p>
          </div>
        </div>
        <div data-aos="zoom-out-up" className="about-cajas">
          <div className="about_img">
            <img
              src="https://emoralesvet.com/wp-content/uploads/2015/12/icono-que-hacemos.png"
              alt=""
            />
          </div>
          <div className="content_about">
            {" "}
            <h3>Lorem.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, at?
            </p>
          </div>
        </div>
        <div data-aos="zoom-out-up" className="about-cajas">
          <div className="about_img">
            <img
              src="https://emoralesvet.com/wp-content/uploads/2015/12/icono-que-hacemos.png"
              alt=""
            />
          </div>
          <div className="content_about">
            {" "}
            <h3>Lorem.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, at?
            </p>
          </div>
        </div>
      </div>

      {/* <div className="mision_v_v">

        <div className="titulo-mvv">
          <h1>Mision, Vision y Valores</h1>
        </div>

        <div className="m_v_v">
          <div className="btn_group">
            <button onClick={mostrar_ocultar_mision} className="btn-mvv">
              {show_hiden_mision ? "" : ""} Misión
            </button>
            <button onClick={mostrar_ocultar_vision} className="btn-mvv">
              {" "}
              {show_hiden_vision ? "" : ""}
              Vision
            </button>
            <button onClick={mostrar_ocultar_valores} className="btn-mvv">
              {" "}
              {show_hiden_valores ? "" : ""}
              Valores
            </button>
            <div className="text_content">
              {show_hiden_mision && (
                <p>
                  {" "}
                  MISION Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nam dignissimos consectetur accusantium, quod omnis
                  placeat. Quod excepturi eaque aspernatur tempore, ea maiores
                  fugit placeat quia vel nobis assumenda. Consequuntur modi
                  doloremque ut aliquid, explicabo id adipisci voluptatibus
                  nihil porro ipsum provident excepturi impedit? Tenetur aliquam
                  nemo, molestias error facilis beatae.
                </p>
              )}

              {show_hiden_vision && (
                <p>
                  VISION Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Atque ipsum, consectetur expedita incidunt, quos, in
                  ipsa modi obcaecati rem non dolorum quidem voluptates optio!
                  Sunt commodi officia laborum illum tempore, fuga quia omnis
                  natus in pariatur illo rem ratione debitis sint adipisci
                  perferendis atque maxime voluptatem quis veritatis provident
                  architecto?
                </p>
              )}

              {show_hiden_valores && (
                <p>
                  VALORES Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Reprehenderit reiciendis laboriosam, rerum delectus quas
                  voluptates sequi odio labore. Natus tenetur sequi quas modi,
                  nobis sapiente, amet velit quae molestias cum reiciendis illo
                  voluptatibus enim quisquam iusto facere, temporibus doloremque
                  nisi. Placeat explicabo amet, asperiores molestiae quis soluta
                  adipisci atque iusto.
                </p>
              )}
            </div>
          </div>

          <div className="video_nosotro">
            <video
              src="https://media.istockphoto.com/id/1752533608/es/v%C3%ADdeo/choca-los-cinco-empresarios-y-trabajo-en-equipo-con-colaboraci%C3%B3n-y-celebraci%C3%B3n-en-una-oficina.mp4?s=mp4-640x640-is&k=20&c=ToQ2_tr9wBD5uin5V3AysUnpk2xUA8vBZ5j_5I1L5LQ="
              controls
              autoPlay
              playsInline
              loop
            ></video>
          </div>
        </div>
      </div> */}
      <h1>Mision, Vision y Valores</h1>
      <div className="mvv">
        <div className="content">
          <div className="botones">
            <button onClick={mostrar_ocultar_mision}>
              {show_hiden_mision ? "" : ""} Misión
            </button>
            <button onClick={mostrar_ocultar_vision}>
              {" "}
              {show_hiden_vision ? "" : ""}
              Vision
            </button>
            <button onClick={mostrar_ocultar_valores}>
              {" "}
              {show_hiden_valores ? "" : ""}
              Valores
            </button>
          </div>
          {show_hiden_mision && (
            <p data-aos="fade-right">
              {" "}
              Contribuir a disminuir el riesgo social de los nin@s y jóvenes
              trabajadores de los mercados, calles y avenidas de Tegucigalpa y
              Comayagüela y sus familias, brindándoles servicios alternativos de
              salud y educación a través de programas y actividades que
              respondan a sus necesidades actuales, con énfasis en la
              prevención, para su integración social y recuperación de sus
              derechos, propiciando su participación y proyección social.
            </p>
          )}

          {show_hiden_vision && (
            <p data-aos="fade-right">
              Somos una institución que llega directamente a los beneficiarios
              en su propio ambiente, incorporando metodologías innovadoras que
              permiten su participación y generan procesos de superación
              personal y familiar. En consonancia con la sostenibilidad a través
              de capacitación, investigación y la incorporación de personas
              profesionales en el campo con aptitud de servicio, dinámicos y
              comprometidos socialmente por el desarrollo de honduras.
            </p>
          )}

          {show_hiden_valores && (
            <p data-aos="fade-right">
              VALORES Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit reiciendis laboriosam, rerum delectus quas
              voluptates sequi odio labore. Natus tenetur sequi quas modi, nobis
              sapiente, amet velit quae molestias cum reiciendis illo
              voluptatibus enim quisquam iusto facere, temporibus doloremque
              nisi. Placeat explicabo amet, asperiores molestiae quis soluta
              adipisci atque iusto.
            </p>
          )}
        </div>
        <div className="video">
          {" "}
          <video
            src="https://media.istockphoto.com/id/1752533608/es/v%C3%ADdeo/choca-los-cinco-empresarios-y-trabajo-en-equipo-con-colaboraci%C3%B3n-y-celebraci%C3%B3n-en-una-oficina.mp4?s=mp4-640x640-is&k=20&c=ToQ2_tr9wBD5uin5V3AysUnpk2xUA8vBZ5j_5I1L5LQ="
            controls
            autoPlay
            playsInline
            loop
          ></video>
        </div>
      </div>
 
      <div  className="Nuestos_donantes">
        <h1>Nuestos Donantes</h1>
      </div>
      <div  class="slider">
        <div class="slide_donantes">
          <div class="donante">
            <img
              src="https://redcoiproden.org/wp-content/uploads/2023/11/Save-The-Children.png"
              alt="Donante"
            />
          </div>
          <div class="donante">
            <img
              src="https://redcoiproden.org/wp-content/uploads/2023/11/World-Vision.png"
              alt="Donante"
            />
          </div>
          <div class="donante">
            <img
              src="https://redcoiproden.org/wp-content/uploads/2023/11/Alternativas-y-Oportunidades.png"
              alt="Donante"
            />
          </div>
          <div class="donante">
            <img
              src="https://redcoiproden.org/wp-content/uploads/2023/11/Pestalozzi.png"
              alt="Donante"
            />
          </div>
          <div class="donante">
            <img
              src="https://redcoiproden.org/wp-content/uploads/2023/11/Asoc.-Jovenes-Por-Honduras.png"
              alt="Donante"
            />
          </div>
          <div class="donante">
            <img
              src="https://redcoiproden.org/wp-content/uploads/2023/11/Child-Fund.png"
              alt="Donante"
            />
          </div>
          <div class="donante">
            <img
              src="https://redcoiproden.org/wp-content/uploads/2023/11/Asociacion-Compartir.png"
              alt="Donante"
            />
          </div>
          <div class="donante">
            <img
              src="https://redcoiproden.org/wp-content/uploads/2023/11/Aldeas-SOS.png"
              alt="Donante"
            />
          </div>

          <div class="donante">
            <img
              src="https://redcoiproden.org/wp-content/uploads/2023/11/Save-The-Children.png"
              alt="Donante"
            />
          </div>
          <div class="donante">
            <img
              src="https://redcoiproden.org/wp-content/uploads/2023/11/World-Vision.png"
              alt="Donante"
            />
          </div>
          <div class="donante">
            <img
              src="https://redcoiproden.org/wp-content/uploads/2023/11/Alternativas-y-Oportunidades.png"
              alt="Donante"
            />
          </div>
          <div class="donante">
            <img
              src="https://redcoiproden.org/wp-content/uploads/2023/11/Pestalozzi.png"
              alt="Donante"
            />
          </div>
          <div class="donante">
            <img
              src="https://redcoiproden.org/wp-content/uploads/2023/11/Asoc.-Jovenes-Por-Honduras.png"
              alt="Donante"
            />
          </div>
          <div class="donante">
            <img
              src="https://redcoiproden.org/wp-content/uploads/2023/11/Child-Fund.png"
              alt="Donante"
            />
          </div>
          <div class="donante">
            <img
              src="https://redcoiproden.org/wp-content/uploads/2023/11/Asociacion-Compartir.png"
              alt="Donante"
            />
          </div>
          <div class="donante">
            <img
              src="https://redcoiproden.org/wp-content/uploads/2023/11/Aldeas-SOS.png"
              alt="Donante"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
