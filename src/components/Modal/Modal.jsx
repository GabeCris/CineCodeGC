import React from "react";
import Popup from "reactjs-popup";
import styles from "./Modal.module.css";
import Close from "../../assets/close.svg";
import Ticket from "../../assets/icons/ticket.svg";
import { Bounce } from "react-awesome-reveal";
import "../Button/Button.css";
import { Link } from "react-router-dom";

const Modal = () => {
    return (
        <Popup
            trigger={
                <button className="button_default">
                    <img src={Ticket} alt="" />
                    Comprar
                </button>
            }
            modal
            nested
        >
            {(close) => (
                <Bounce duration={200}>
                    <div className={styles.modal}>
                        <img src={Close} onClick={close} alt="" />
                        <div className={styles.content}>
                            <p>Deseja confirmar a compra?</p>
                        </div>
                        <div className={styles.actions}>
                            <button
                                className="button_secondary"
                                onClick={() => {
                                    console.log("modal closed ");
                                    close();
                                }}
                            >
                                Cancelar
                            </button>
                            <Link to="/CineCode/">
                                <button
                                    className="button_default"
                                    onClick={() => {
                                        close();
                                    }}
                                >
                                    Confirmar
                                </button>
                            </Link>
                        </div>
                    </div>
                </Bounce>
            )}
        </Popup>
    );
};

export default Modal;
