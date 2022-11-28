import React from "react";
import '../styles/dot.css'

const Dot = ({ coordX, coordY }) => {
    let x = coordX;
    let y = coordY;

    return (
        <div className='dot' style={{left: x, top: y }}></div>
    )
}

export default Dot;