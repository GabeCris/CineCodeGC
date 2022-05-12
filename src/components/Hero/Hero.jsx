import React from "react";
import styles from "./Hero.module.css";
import Button from "../Button/Button";
import Footer from "../../assets/footer.svg";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <>
                    <h1>Doutor Estranho</h1>
                    <h2>No multiverso da Loucura</h2>
                </>
                <Link to="/room/453395">
                    <Button
                        color="primary"
                        text="Comprar"
                        icon="ticket"
                    ></Button>
                </Link>
                <p>Estreou 5 de maio</p>
            </div>
            <footer>
                <img src={Footer} alt="" />
            </footer>
        </main>
    );
};

export default Hero;
