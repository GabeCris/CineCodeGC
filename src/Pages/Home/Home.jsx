import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import style from "./Home.module.css";

function Home() {
    return (
        <div className={style.container} id="home">
            <Header></Header>
            <Hero></Hero>
        </div>
    );
}

export default Home;
