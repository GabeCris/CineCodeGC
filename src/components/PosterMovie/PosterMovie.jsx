import React, { useState } from "react";
import styles from "./PosterMovie.module.css";
import Poster from "../../assets/movie/poster.svg";
import Null from "../../assets/movie/heart-null.svg";
import Full from "../../assets/movie/heart-full.svg";

const PosterMovie = ({ title, image, imageStatus }) => {
    const [heart, setHeart] = useState(Null);
    const heartCheck = () => setHeart(heart == Null ? Full : Null);

    return (
        <div className={styles.container}>
            <img className={styles.heart} src={heart} onClick={heartCheck} />
            <img src={image} alt="" />
            <div className={styles.back} onClick={heartCheck}>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default PosterMovie;
