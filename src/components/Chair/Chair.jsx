import React, { useState } from "react";
import styles from "./Chair.module.css";
import "./Chair.css";

const Chair = ({ cont, setCont, value, index, un }) => {
    const [status, setStatus] = useState("available");
    const changeStatus = () => {
        if (un != 0) {
            setStatus(status == "available" ? "selected" : "available");

            status == "available"
                ? setCont(cont + value)
                : setCont(cont - value);
            console.log(status);
        }
    };

    return (
        <div
            className={`${styles.chair} ${un === 0 ? "unavailable" : status}`}
            onClick={changeStatus}
        >
            <span>
                {index < 9 && "0"}
                {index + 1}
            </span>
        </div>
    );
};

export default Chair;
