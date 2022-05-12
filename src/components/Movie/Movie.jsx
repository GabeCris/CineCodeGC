import React, { useEffect, useState } from "react";
import Poster from "../../assets/movie/poster.svg";
import styles from "./Movie.module.css";
import TitleSection from "../TitleSection/TitleSection";
import MovieInfo from "../MovieInfo/MovieInfo";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./Movie.css";

const Movie = ({ id, title, overview, image, imageStatus }) => {
    const myKey = "9fc736e1e3a6fcd64ea079c9df04929c";
    const [genre, setGenre] = useState("");
    const [movie, setMovie] = useState("");
    let nRating;

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${myKey}&language=pt-BR&append_to_response=release_dates`
        )
            .then((response) => response.json())
            .then((data) => {
                setGenre(data.genres[0].name);
                console.log(data);
                setMovie(data);
            });
    }, []);

    nRating = Math.round(movie.vote_average);

    return (
        <section className={styles.container}>
            <article>
                <img src={imageStatus != null ? image : Poster} alt="" />
                <img src={"./feedbacks/" + nRating + "star.svg"} alt="" />
                <p>{movie.vote_average}</p>
            </article>
            <aside>
                <TitleSection title={title} />
                <div className={styles.content}>
                    <p className={styles.text}>
                        {overview != ""
                            ? overview
                            : "Nenhuma descrição disponível :("}
                    </p>
                    <div className={styles.information}>
                        <MovieInfo icon="clock" text={`${movie.runtime} min`} />
                        <MovieInfo icon="camera" text={genre} />
                        <MovieInfo icon="language" text="Dub" />
                        <MovieInfo icon="3d" />
                    </div>
                </div>
                <div className={styles.buttons}>
                    <Link to="/*" className="link">
                        <Button
                            color="secondary"
                            text="Trailer"
                            icon="trailer"
                        ></Button>
                    </Link>
                    <Link to={`/room/${id}`} className={styles.link}>
                        <Button
                            color="primary"
                            text="Comprar"
                            icon="ticket"
                        ></Button>
                    </Link>
                </div>
            </aside>
        </section>
    );
};

export default Movie;
