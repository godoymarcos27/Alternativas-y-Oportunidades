import { Nav } from "./NAv";
import Swal from "sweetalert2";
import { Footer } from "./footer";

export function Biblioteca() {
  function alerta_t1() {
    Swal.fire({
      title: "Titulo",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim quia consequatur dolorum assumenda possimus quis architecto eum, ullam, officiis odit velit ipsum laboriosam odio modi? Commodi culpa nesciunt ducimus molestias adipisci quam officia quos, dolorem quo voluptatem earum velit alias quisquam est praesentium veniam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim quia consequatur dolorum assumenda possimus quis architecto eum, ullam, officiis odit velit ipsum laboriosam odio modi? Commodi culpa nesciunt ducimus molestias adipisci quam officia quos, dolorem quo voluptatem earum velit alias quisquam est praesentium veniam!",
      imageUrl:
        "https://www.clarin.com/img/2024/02/19/xt29BsK6g_600x600__1.jpg",
      imageWidth: 300,
      imageHeight: 200,
      showCloseButton: true,
      imageAlt: "Custom image",
    });
  }

  return (
    <>
      <Nav img="https://static.vecteezy.com/system/resources/previews/020/864/863/non_2x/illustration-realistic-icon-news-update-webpage-information-about-3d-creative-isolated-on-background-vector.jpg" />
      <h1> Información Más Revelan Del Momento</h1>
      <div className="blogs">
        <div className="pdf_blog">
          <div className="img_pdf">
            <img
              src="https://image.slidesharecdn.com/intro-es-150703180317-lva1-app6892/75/Intro-es-1-2048.jpg"
              alt=""
            />
          </div>
          <div className="btn_blog">
            <a href="../src/pdf/derechos.pdf" target="_blank" className="pdf_ver">Ver o Descargar</a>
          </div>
        </div>

        <div className="pdf_blog">
          <div className="img_pdf">
            <img
              src="https://online.fliphtml5.com/ofxzj/qdwl/files/large/1.jpg?1651260990"
              alt=""
            />
          </div>
          <div className="btn_blog">
          <a href="../src/pdf/derechos.pdf" target="_blank" className="pdf_ver">Ver o Descargar</a>
          </div>
        </div>

        <div className="pdf_blog">
          <div className="img_pdf">
            <img
              src="https://repositorio-chepes.sedesol.gob.hn/server/api/core/bitstreams/72eb9d4b-980e-440b-9367-d8c6b8c784b9/content"
              alt=""
            />
          </div>
          <div className="btn_blog">
          <a href="../src/pdf/derechos.pdf" target="_blank" className="pdf_ver">Ver o Descargar</a>
          </div>
        </div>

        
      </div>

      <Footer />
    </>
  );
}
