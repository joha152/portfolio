import React from "react";
import johanna from "../../assets/imagenes/johanna.jpg"
import style from "./home.module.css";
import css from "../../assets/iconos/css.png";
import git from "../../assets/iconos/git.png";
import github from "../../assets/iconos/github.png";
import html from "../../assets/iconos/html.png";
import javascript from "../../assets/iconos/javascript.png";
import node from "../../assets/iconos/node.png";
import postgresql from "../../assets/iconos/postgresql.png";
import sequelize from "../../assets/iconos/sequelize.png";
import react from "../../assets/iconos/react.png";
import SobreMi from "../sobreMi/SobreMi";



const Home = () => {

    return (
        <>
        <div className={style.home}>
        <div className={style.card}>
            <img src={johanna} alt="yo" className={style.card2} />
        </div>
            <div>
                <h1 className={style.texto}>¡BIENVENIDOS!</h1>
                <h2 className={style.texto}>Soy Johanna</h2>
                <h2 className={style.texto}>Y este es mi portfolio</h2>
            </div>
        </div>

            <h2 className={style.texto}>Stack tecnológico</h2>
            <div className={style.contenedorIcono}>
            <div className={style.icono}>
            <img src={html} alt="html" className={style.icono2}/>
            </div>
            <div className={style.icono}>
            <img src={css} alt="css" className={style.icono2} />
            </div>
            <div className={style.icono}>
            <img src={javascript} alt="js" className={style.icono2}/>
            </div>
            <div className={style.icono}>
            <img src={react} alt="react" className={style.icono2}/>
            </div>
            <div className={style.icono}>
            <img src={node} alt="node" className={style.icono2}/>
            </div>
            <div className={style.icono}>
            <img src={postgresql} alt="postgres" className={style.icono2}/>
            </div>
            <div className={style.icono}>
            <img src={sequelize} alt="sequelize" className={style.icono2}/>
            </div>
            <div className={style.icono}>
            <img src={git} alt="git" className={style.icono2}/>
            </div>
            <div className={style.icono}>
            <img src={github} alt="github" className={style.icono2}/>
            </div>
            </div>

            
        </>
    )

};

export default Home;