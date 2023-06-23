import React from "react";
import atras from "../../assets/iconos/atras.png";
import style from "./sobremi.module.css";
import { NavLink } from "react-router-dom";
import henry from "../../assets/iconos/Henry.png"

const SobreMi = () => {

  return (
    <>
      <div className={style.conteiner}>
        <div className={style.cuadro1}> 
          <div className={style.flecha}> 
            <NavLink to=
              "/">
              <img src={atras} alt="atras" className={style.icon} />
            </NavLink>
          </div>

          <div> 
            <h1 className={style.txt}>Hola</h1>
          </div>
        </div>

        <div>
          <h2 className={style.txt}>Soy Johanna, soy de Argentina</h2>
          <h2 className={style.txt}>Desarrolle mis conocimientos en </h2>
          <a href="https://www.soyhenry.com/?utm_source=google&utm_medium=cpc&utm_campaign=GADS_SEARCH_ARG_BRAND&utm_content=Brand&gad=1&gclid=CjwKCAjwhdWkBhBZEiwA1ibLmOpudBLKVr06km2GCwr8yVYgKOWjbGlR3jcF2RHph7x_t3aWpE-CjxoCrqkQAvD_BwE">
          <img src={henry} alt="henry" className={style.henry} />
          </a>
          <h2 className={style.txt}>Conoci Henry gracias a una amiga. Al principio no sabia donde estaba ni lo que estaba haciendo,
            pero cuando entendí todas las posibilidades que hay al programar, me encantó!!
          </h2>
          <h2 className={style.txt}>Fue un camino dificil pero no me arrepiento de todo el sacrificio que fue llegar a la meta</h2>

        </div>
      </div>
      <div>
        <h2 className={style.txt}>Te invito a ver mis proyectos acá</h2>

        <NavLink to='/proyectos'>
          <button className={style.button}>PROYECTOS</button>
        </NavLink>

      </div>
    </>
  )

};


export default SobreMi;
