import React, { useState } from "react";
import styles from "./RoomMovie.module.css";
import Logo from "../../assets/logo-cine-code.svg";
import Close from "../../assets/close.svg";
import { Link } from "react-router-dom";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import Chair from "../../components/Chair/Chair";
import Random from "./RandomValue";
import Modal from "../../components/Modal/Modal";
import { useParams } from "react-router";
import { useEffect } from "react";

import Loading from "../../components/Loading/Loading";

const RoomMovie = () => {
    const chairs = [];
    const [cont, setCont] = useState(0);
    const imagePath = "https://image.tmdb.org/t/p/w500";

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

    const { id } = useParams();
    console.log(id);

    const renderChair = () => {
        for (let i = 0; i < 50; i++) {
            chairs.push(
                <Chair
                    key={i}
                    index={i}
                    setCont={setCont}
                    cont={cont}
                    value={12}
                    un={Random[i]}
                />
            );
        }
        return <div className={styles.chairContainer}>{chairs}</div>;
    };

    return (
        <section className={styles.container}>
            <Loading></Loading>
            <header>
                <img src={Logo} alt="" />
                <Link to="/CineCode/">
                    <img src={Close} alt="" />
                </Link>
            </header>

            <main>
                <article>
                    <img
                        src={`${imagePath}${movie.poster_path}`}
                        className={styles.poster}
                        alt=""
                    />{" "}
                    <div className={styles.information}>
                        <MovieInfo icon="clock" text={`${movie.runtime} min`} />
                        <MovieInfo icon="camera" text={genre} />
                        <MovieInfo icon="language" text="Dub" />
                        <MovieInfo icon="3d" />
                    </div>
                </article>
                <aside>
                    <div className={styles.banner}>
                        <h3>{movie.title}</h3>
                    </div>
                    {renderChair()}
                    <div className={styles.description}>
                        <p>Disponível</p>
                        <p>Indisponível</p>
                        <p>Selecionado</p>
                    </div>
                    <div className={styles.buttons}>
                        <div className={styles.money}>
                            <span>$</span>
                            <div className={styles.price}>
                                <span>12</span>
                                <span>cada</span>
                            </div>
                        </div>
                        <Modal></Modal>
                    </div>
                    <h4>Total: R${cont}</h4>
                </aside>
            </main>
        </section>
    );
};

export default RoomMovie;
