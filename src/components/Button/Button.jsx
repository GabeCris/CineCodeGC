import "./Button.css";

const Button = ({ icon, text, color }) => {
    return (
        <button
            className={
                color == "primary" ? "button_default" : "button_secondary"
            }
        >
            <img src={"./icons/" + icon + ".svg"} alt="" />
            {""}
            {text}
        </button>
    );
};

export default Button;
