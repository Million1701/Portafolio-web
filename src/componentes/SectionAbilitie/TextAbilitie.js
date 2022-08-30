import React, { useRef, useEffect, useState } from "react";
import './Abilities.css';
import svgFondo from '../../imagenes/fig3.png';
import textAbilities from '../../imagenes/abilities.png';
import AbilitiesInfo from "./AbilitiesInfo";
import { updateResize } from "../updateResize";

export default function TextAbilitie() {
    const textImgRef = useRef()
    const titleRef = useRef()
    const svgRef = useRef()
    const containerRef = useRef(null)

    const [isVisible, setIsVisible] = useState(false)

    const callbackFunction = (entries) => {

        const [entry] = entries
        setIsVisible(entry.isIntersecting)
        if (isVisible) {
            textImgRef.current.style.opacity = "0.3";
            titleRef.current.style.opacity = "1";
            titleRef.current.style.letterSpacing = "3px";
            svgRef.current.style.opacity = "1";
            svgRef.current.style.right = "-55px";
            updateResize(textImgRef, "left")
        }

    }

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options)
        if (containerRef.current) {
            observer.observe(containerRef.current)
        }
    })
    return (
        <>
            <div className='content' ref={containerRef} id="abilities">
                <div className='textAbilitie' ref={textImgRef}>
                    <img src={textAbilities} alt="Title" />
                </div>
                <h2 className="titleSection" ref={titleRef}>Abilities</h2>
                <div className="pts-x-style" ref={svgRef}>
                    <img src={svgFondo} alt="SVG" />
                </div>
            </div>
            <br />
            <AbilitiesInfo />
        </>
    )
}

