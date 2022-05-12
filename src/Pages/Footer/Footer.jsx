import React from "react";
import styles from "./Footer.module.css";
import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";
import Back from "../../assets/back.svg";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>
                <a
                    href="https://www.linkedin.com/in/gabriel-crisanto/"
                    target="_blank"
                >
                    <img src={Linkedin} alt="" />
                </a>
                <a href="https://github.com/GabeCris" target="_blank">
                    <img src={Github} alt="" />
                </a>
            </div>
            <p>© GabeCris</p>
            <div>
                <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={500}
                >
                    <img src={Back} alt="" />
                </Link>
            </div>
        </div>
    );
};

export default Footer;
