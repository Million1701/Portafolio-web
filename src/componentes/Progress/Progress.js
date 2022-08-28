import React, { useState, useEffect } from "react";
import "./Progress.css";

const Progress = ({ isVisibleInfo, done, background, boxShadow }) => {
    const [style, setStyle] = useState({});

    useEffect(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`,
            background: `${background}`,
            boxShadow: `${boxShadow}`
        }
        if (isVisibleInfo) {
            setStyle(newStyle);
        }
    }, [isVisibleInfo, done, background, boxShadow]);

    return (
        <div className="progress">
            <div className="progress-done" style={style}>
                {done}%
            </div>
        </div>
    )
}

export default Progress;