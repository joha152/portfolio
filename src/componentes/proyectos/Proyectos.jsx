import React from "react";
import style from "./proyectos.module.css";
import food from "../../assets/imagenes/foodApp.png";
import muscleLab from "../../assets/imagenes/MuscleLAb.png";
import { NavLink } from "react-router-dom";
import atras from '../../assets/iconos/atras.png';

const Proyectos = () => {

    return (
        <>

            <div className={style.flecha}>
                <NavLink to=
                    "/">
                    <img src={atras} alt="atras" className={style.icon} />
                </NavLink>
            <div className={style.proyectos}>
                <h1 className={style.texto}>Proyectos</h1>
            </div>
            </div>

            <div className={style.conteiner}>
                <div className={style.card}>
                    <a href="https://deploy-food-eight.vercel.app/">
                        <h2 className={style.texto}>Food App</h2>
                    </a>

                    <img src={food} alt="food" className={style.img} />
                </div>
                <div className={style.card}>
                    <a href="https://muscle-lab-six.vercel.app/">
                        <h2 className={style.texto}>MuscleLab</h2>
                    </a>

                    <img src={muscleLab} alt="muscleLab" className={style.img} />
                </div>
            </div>
        </>
    )
};


export default Proyectos;