import React from "react";
import heart from "../../assets/iconos/me-gusta.png";
import style from "./footer.module.css";

const Footer = ()=>{
    return(
        <>
        <div className={style.footer}>
            <h1 className={style.texto}>Johanna Servodio <img src={heart} alt="corazon" className={style.henry} /></h1>
        </div>
        </>
    )
};


export default Footer;