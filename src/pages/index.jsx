import React from "react";
import HeaderNav from "../components/templates/HeaderNav";
import Main from "../components/templates/Main"
import Footer from "../components/templates/Footer";
import style from "../styles/Index.module.css"

export default function Inicio() {
    return (
        <div className={style.grid}>
            <HeaderNav />
            <Main />
            <Footer />
        </div>
    )
}