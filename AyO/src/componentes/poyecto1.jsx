import { Nav } from "./NAv";
import { useState } from "react";
import { Footer } from "./footer";
export function P1() {

    const [info, setInfo]= useState(true)
    const [info1, setInfo1]= useState(false)
    function motrari1 (){
        setInfo(true)
        setInfo1(false)

    }
    function motrari2 (){
        setInfo(false)
        setInfo1(true)

    }
  return (
    <> 

<Nav img="https://www.udep.edu.pe/hoy/wp-content/uploads/sites/49/2019/09/48602822407_953b2b62e6_o-Large.jpg"/>
<h1>Proyectos</h1>

      <button className="proyectos" style={{width:"25rem"}} onClick={motrari1}>   {info ? "" : ""}Proyecto1</button>
      <button className="proyectos" style={{width:"25rem"}} onClick={motrari2}>   {info1 ? "" : ""}Proyecto2</button>
      <button className="proyectos" style={{width:"25rem"}}>Proyecto1</button>
     
      {info && (
        
                <p style={{padding:"5rem"}}>
                  {" "}
                  <b>Proyecto1</b> Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nam dignissimos consectetur accusantium, quod omnis
                  placeat. Quod excepturi eaque aspernatur tempore, ea maiores
                  fugit placeat quia vel nobis assumenda. Consequuntur modi
                  doloremque ut aliquid, explicabo id adipisci voluptatibus
                  nihil porro ipsum provident excepturi impedit? Tenetur aliquam
                  nemo, molestias error facilis beatae.
                </p>
              )}

{info1 && (
        
        <p style={{padding:"5rem"}}>
          {" "}
          <b>Proyecto2</b> Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nam dignissimos consectetur accusantium, quod omnis
          placeat. Quod excepturi eaque aspernatur tempore, ea maiores
          fugit placeat quia vel nobis assumenda. Consequuntur modi
          doloremque ut aliquid, explicabo id adipisci voluptatibus
          nihil porro ipsum provident excepturi impedit? Tenetur aliquam
          nemo, molestias error facilis beatae.
        </p>
      )}
<Footer/>
    </>
  );
}
