import React from "react";
import styles from "./Loading.module.css";
import Logo from "../../assets/logo-cine-code.svg";
import { useState } from "react";

const Loading = () => {
    const [loading, setLoading] = useState(true);
    setInterval(() => (loading ? setLoading(false) : ""), 1600);
    return (
        <>
            {loading && (
                <section className={styles.container}>
                    <img className={styles.logo} src={Logo} alt="" />
                    <div className={styles.loading}></div>
                </section>
            )}
        </>
    );
};

export default Loading;
