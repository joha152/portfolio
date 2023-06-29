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
                        <p className={style.parrafo}>Este proyecto fue realizado con Javascript, React.js, Redux, Node.js, Express y Sequelize.
                            Realiza busqueda por nombre de receta entera o coincidencia de una palabra. Filtra por tipo de dieta,
                            y por origen, si es de la api o de la base de datos, ya que permite crear recetas y guardarlas.
                            Ordena por heslthScore, y alfabeticamente.
                        </p>
                    <img src={food} alt="food" className={style.img} />
                </div>
                <div className={style.card}>
                    <a href="https://muscle-lab-six.vercel.app/">
                        <h2 className={style.texto}>MuscleLab</h2>
                    </a>
                        <p className={style.parrafo}>
                            MuscleLab fue creado con la intención de poder administrar la página de un gimnasio.
                            Por parte del administrador se pueden crear, editar y eliminar clases, usuarios y sedes.
                            Por parte del cliente se puede crear un usuario, o acceder con Google. Comprar una membresía 
                            que permite una cierta cantidad de clases, que se seleccionan y se guardan en el perfil. También pueden 
                            hacer comentarios de las clases tomadas.
                        </p>
                    <img src={muscleLab} alt="muscleLab" className={style.img} />
                </div>
            </div>
        </>
    )
};


export default Proyectos;