import React from "react";
import styles from "./Carrousel.module.css";
import PosterMovie from "../PosterMovie/PosterMovie";
import { useEffect, useState } from "react";

const Carrousel = () => {
    const [movies, setMovies] = useState([]);
    const key = "9fc736e1e3a6fcd64ea079c9df04929c";
    const imagePath = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=pt-BR&page=1`
        )
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
            });
    }, []);

    return (
        <div className={styles.carrousel} tabIndex="0">
            <div className={styles.movies}>
                {movies.map((movie, index) =>
                    index <= 7 ? (
                        <PosterMovie
                            key={movie.id}
                            title={movie.title}
                            image={`${imagePath}${movie.poster_path}`}
                            imageStatus={movie.poster_path}
                        />
                    ) : (
                        " "
                    )
                )}
            </div>
        </div>
    );
};

export default Carrousel;
