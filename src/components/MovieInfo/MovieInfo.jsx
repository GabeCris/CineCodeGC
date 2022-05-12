import React from "react";
import styles from "./MovieInfo.module.css";

const MovieInfo = ({ icon, text }) => {
    return (
        <div className={styles.informations}>
            <img src={"./icons/" + icon + ".svg"} alt="" />
            <p>{text}</p>
        </div>
    );
};

export default MovieInfo;
