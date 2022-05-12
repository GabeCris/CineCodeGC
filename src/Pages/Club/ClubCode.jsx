import React from "react";
import styles from "./ClubCode.module.css";
import TitleSection from "../../components/TitleSection/TitleSection";
import Button from "../../components/Button/Button";
import { Fade } from "react-awesome-reveal";

const ClubCode = () => {
    return (
        <section className={styles.container} id="club">
            <TitleSection title="ClubCode" />
            <Fade>
                <div className={styles.content}>
                    <img
                        className={styles.popcorn}
                        src="./icons/popcorn-club.svg"
                        alt=""
                    />
                    <div className={styles.text}>
                        <h4>O que é?</h4>
                        <p>
                            Com o Code Clube amantes de pipoca e cinema recebem
                            descontos e muitas vantagens na hora de assistir seu
                            filme favorito, então não perca tempo e vire logo um
                            CineCoder!
                        </p>
                        <Button
                            color="primary"
                            icon="popcorn"
                            text="Inscrever-se"
                        />
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default ClubCode;
