import React from "react";
import TitleSection from "../../components/TitleSection/TitleSection";
import styles from "./Schedule.module.css";
import Movie from "../../components/Movie/Movie";
import { Fade } from "react-awesome-reveal";
import { useState, useEffect } from "react";

const Schedule = () => {
    const [movies, setMovies] = useState([]);
    const key = "9fc736e1e3a6fcd64ea079c9df04929c";
    const imagePath = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=pt-BR&region=BR`
        )
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
                // console.log(data.results.id);
            });
    }, []);

    return (
        <section className={styles.container} id="schedule">
            <TitleSection title="Em cartaz" />
            {movies.map((movie, index) =>
                index <= 5 ? (
                    <Fade>
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            overview={movie.overview}
                            image={`${imagePath}${movie.poster_path}`}
                            imageStatus={movie.poster_path}
                        />
                    </Fade>
                ) : (
                    " "
                )
            )}
        </section>
    );
};

export default Schedule;
