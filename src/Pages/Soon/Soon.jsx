import React from "react";
import styles from "./Soon.module.css";
import TitleSection from "../../components/TitleSection/TitleSection";
import Carrousel from "../../components/Carrousel/Carrousel";
import { Fade } from "react-awesome-reveal";

const Soon = () => {
    return (
        <section className={styles.container} id="soon">
            <TitleSection title="Em breve" />
            <Fade>
                <Carrousel />
            </Fade>
        </section>
    );
};

export default Soon;
