import { Nav } from "./NAv";
import { Footer } from "./footer";

export function Nosotros (){
return<>
<Nav img="https://media.istockphoto.com/id/1203758034/es/foto/gente-de-negocios-trabajando-en-la-oficina-por-la-noche.jpg?s=1024x1024&w=is&k=20&c=sRkyvcFGoA7VXHG262Nfe3VeYRpgoLuRm8ZPMTu7TtU="/>

<h1>Qué hacemos</h1>
<div className="about">
    <div className="about-cajas">
        <div className="about_img">
            <img src="https://emoralesvet.com/wp-content/uploads/2015/12/icono-que-hacemos.png" alt="" />
        </div>
        <div className="content_about"> <h3>Lorem.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, at?</p></div>
    </div>
    <div className="about-cajas">
        <div className="about_img">
            <img src="https://emoralesvet.com/wp-content/uploads/2015/12/icono-que-hacemos.png" alt="" />
        </div>
        <div className="content_about"> <h3>Lorem.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, at?</p></div>
    </div>
    <div className="about-cajas">
        <div className="about_img">
            <img src="https://emoralesvet.com/wp-content/uploads/2015/12/icono-que-hacemos.png" alt="" />
        </div>
        <div className="content_about"> <h3>Lorem.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, at?</p></div>
       
    </div>
</div>
<div className="m_v_v">
    <butom className="btn-mvv">Mision</butom>
    <butom className="btn-mvv">Vision</butom>
    <butom className="btn-mvv">Valores</butom>
</div>

<Footer/>

</>
}