import { Nav } from "./NAv";
import Swal from 'sweetalert2'
import { Footer } from "./footer";

export function Biblioteca() {

function alerta_t1() {
        Swal.fire({
            title: "Titulo",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim quia consequatur dolorum assumenda possimus quis architecto eum, ullam, officiis odit velit ipsum laboriosam odio modi? Commodi culpa nesciunt ducimus molestias adipisci quam officia quos, dolorem quo voluptatem earum velit alias quisquam est praesentium veniam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim quia consequatur dolorum assumenda possimus quis architecto eum, ullam, officiis odit velit ipsum laboriosam odio modi? Commodi culpa nesciunt ducimus molestias adipisci quam officia quos, dolorem quo voluptatem earum velit alias quisquam est praesentium veniam!",
            imageUrl: "https://www.clarin.com/img/2024/02/19/xt29BsK6g_600x600__1.jpg",
            imageWidth: 300,
            imageHeight: 200,
            showCloseButton: true,
            imageAlt: "Custom image"
            
          });

          
    }

  return (
    <>
      <Nav img="https://static.vecteezy.com/system/resources/previews/020/864/863/non_2x/illustration-realistic-icon-news-update-webpage-information-about-3d-creative-isolated-on-background-vector.jpg" />
         <h1> Información  Más Revelan Del Momento</h1>
      <div className="blogs">

      

        <div className="blog"> 
             <div className="blog-img">
            <img src="https://www.clarin.com/img/2024/02/19/xt29BsK6g_600x600__1.jpg" alt="" />

        </div>
        <div className="blog-content">
            <h3>Titulo</h3>
            <div className="blog-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim quia consequatur dolorum assumenda possimus quis architecto eum, ullam, officiis odit velit ipsum laboriosam odio modi? Commodi culpa nesciunt ducimus molestias adipisci quam officia quos, dolorem quo voluptatem earum velit alias quisquam est praesentium veniam!</p>
            </div>
           <button onClick={alerta_t1}>Leer Más</button>
        </div>
        </div>  
        <div className="blog"> 
             <div className="blog-img">
            <img src="https://www.clarin.com/img/2024/02/19/xt29BsK6g_600x600__1.jpg" alt="" />

        </div>
        <div className="blog-content">
            <h3>Titulo</h3>
            <div className="blog-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim quia consequatur dolorum assumenda possimus quis architecto eum, ullam, officiis odit velit ipsum laboriosam odio modi? Commodi culpa nesciunt ducimus molestias adipisci quam officia quos, dolorem quo voluptatem earum velit alias quisquam est praesentium veniam!</p>
            </div>
           <button>Leer Más</button>
        </div>
        </div>  
        <div className="blog"> 
             <div className="blog-img">
            <img src="https://www.clarin.com/img/2024/02/19/xt29BsK6g_600x600__1.jpg" alt="" />

        </div>
        <div className="blog-content">
            <h3>Titulo</h3>
            <div className="blog-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim quia consequatur dolorum assumenda possimus quis architecto eum, ullam, officiis odit velit ipsum laboriosam odio modi? Commodi culpa nesciunt ducimus molestias adipisci quam officia quos, dolorem quo voluptatem earum velit alias quisquam est praesentium veniam!</p>
            </div>
           <button>Leer Más</button>
        </div>
        </div>  
        <div className="blog"> 
             <div className="blog-img">
            <img src="https://www.clarin.com/img/2024/02/19/xt29BsK6g_600x600__1.jpg" alt="" />

        </div>
        <div className="blog-content">
            <h3>Titulo</h3>
            <div className="blog-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim quia consequatur dolorum assumenda possimus quis architecto eum, ullam, officiis odit velit ipsum laboriosam odio modi? Commodi culpa nesciunt ducimus molestias adipisci quam officia quos, dolorem quo voluptatem earum velit alias quisquam est praesentium veniam!</p>
            </div>
           <button>Leer Más</button>
        </div>
        </div>  

        <div className="blog"> 
             <div className="blog-img">
            <img src="https://www.clarin.com/img/2024/02/19/xt29BsK6g_600x600__1.jpg" alt="" />

        </div>
        <div className="blog-content">
            <h3>Titulo</h3>
            <div className="blog-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim quia consequatur dolorum assumenda possimus quis architecto eum, ullam, officiis odit velit ipsum laboriosam odio modi? Commodi culpa nesciunt ducimus molestias adipisci quam officia quos, dolorem quo voluptatem earum velit alias quisquam est praesentium veniam!</p>
            </div>
           <button>Leer Más</button>
        </div>
        </div>  

        <div className="blog"> 
             <div className="blog-img">
            <img src="https://www.clarin.com/img/2024/02/19/xt29BsK6g_600x600__1.jpg" alt="" />

        </div>
        <div className="blog-content">
            <h3>Titulo</h3>
            <div className="blog-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim quia consequatur dolorum assumenda possimus quis architecto eum, ullam, officiis odit velit ipsum laboriosam odio modi? Commodi culpa nesciunt ducimus molestias adipisci quam officia quos, dolorem quo voluptatem earum velit alias quisquam est praesentium veniam!</p>
            </div>
           <button>Leer Más</button>
        </div>
        </div>  
       
      </div>

      <Footer />
    </>
  );
}
