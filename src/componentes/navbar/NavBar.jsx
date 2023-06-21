import React from "react";
import style from "./navbar.module.css";
import { NavLink } from "react-router-dom";


const NavBar = () => {

    return (
        <>
        <nav>
            <div className={style.nav}>
                <button className={style.button}>PROYECTOS</button>
                <button className={style.button}>CONTACTO</button>
                <NavLink to="/sobremi">
                <button className={style.button}>SOBRE MI</button>
                </NavLink>
            
            </div>
        </nav>
        </>
    )
};


export default NavBar;