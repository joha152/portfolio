import React from "react";
import linkedin from "../../assets/iconos/linkedin.png";
import mensaje from "../../assets/iconos/mensaje.png";
import github from "../../assets/iconos/github.png";
import style from "./contacto.module.css";
import atras from "../../assets/iconos/atras.png";
import { NavLink } from "react-router-dom";

const Contacto = () => {


    return (
        <>
            <div className={style.conteiner}>
                <div className={style.flecha}>
                    <NavLink to=
                        "/">
                        <img src={atras} alt="atras" className={style.icon} />
                    </NavLink>
                </div>
                <div className={style.contacto}>
                <h1 className={style.texto}>Podes contactarme por</h1>
                </div>
            </div>

            <div className={style.contentIconos}>
            <a href="https://www.linkedin.com/in/johanna-servodio/">
                <img src={linkedin} alt="linkedin" className={style.iconos} />
            </a>
            <a href="https://github.com/joha152">
                <img src={github} alt="github" className={style.iconos} />
            </a>
            <a id="emailIcon" href="mailto:johanna.servodio@gmail.com?subject=Asunto del correo&body=Cuerpo del correo">
                <img src={mensaje} alt="mensaje" className={style.iconos} />
            </a>
            </div>

        </>
    )
};


export default Contacto;
