import React from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/logo-cine-code.svg";
import User from "../../assets/user.svg";
import { Link } from "react-scroll";

const Header = () => {
    return (
        <header className={styles.container}>
            <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
            >
                <img src={Logo} alt="Logo da cine code" />
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link
                            to="schedule"
                            spy={true}
                            smooth={true}
                            offset={-120}
                            duration={500}
                        >
                            Programação
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="soon"
                            spy={true}
                            smooth={true}
                            offset={-120}
                            duration={500}
                        >
                            Lançamentos
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="club"
                            spy={true}
                            smooth={true}
                            offset={-120}
                            duration={500}
                        >
                            Clube Code
                        </Link>
                    </li>
                    <li>
                        <img src={User} alt="Usuário" />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
