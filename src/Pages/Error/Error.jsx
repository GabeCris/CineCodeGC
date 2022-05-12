import React from "react";
import styles from "./Error.module.css";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Error404 from "../../assets/error404.svg";
import TitleSection from "../../components/TitleSection/TitleSection";
import Loading from "../../components/Loading/Loading";

const Error = () => {
    return (
        <div className={styles.container}>
            <Loading></Loading>
            <img src={Error404} alt="" />
            <TitleSection title="Página não encontrada" />
            <Link to="/CineCode/">
                <Button icon="home" text="Voltar" color="secondary" />
            </Link>
        </div>
    );
};

export default Error;
