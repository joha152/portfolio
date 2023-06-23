import React from "react";
import atras from "../../assets/iconos/atras.png";
import style from "./sobremi.module.css";
import { NavLink } from "react-router-dom";


const SobreMi = () => {

  return (
    <>
      <div className={style.conteiner}>
        <div className={style.btn}>

          <NavLink to=
            "/">
            <img src={atras} alt="atras" className={style.icon} />
          </NavLink>

          <h1>Hola</h1>
        </div>
        <h2>Soy Johanna, soy de Argentina</h2>
        <h3>Desarrolle mis conocimientos en Henry</h3>
        <h3>Conoci Henry gracias a una amiga. Al principio no sabia donde estaba ni lo que estaba haciendo,
          pero cuando entendí todas las posibilidades que hay al programar, me encantó!!
        </h3>
        <h3>Fue un camino dificil pero no me arrepiento de todo el sacrificio que fue llegar a la meta</h3>

      </div>
        <div>
          <h2>Te invito a ver mis proyectos acá</h2>

          <button>Proyectos</button>
          
        </div>
    </>
  )

};


export default SobreMi;
