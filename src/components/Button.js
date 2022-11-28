import React from "react";
import './Dot';
import '../styles/button.css';

const Button = ({ command, handleClick, disabled }) => {
    return (
        <button onClick={handleClick} disabled={disabled}>{command}</button>
    )

}

export default Button;