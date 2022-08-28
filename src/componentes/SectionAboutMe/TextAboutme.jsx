import React, { useRef, useEffect, useState } from "react";
import "./AboutMe.css"
import textAboutMe from '../../imagenes/aboutMe.png';
import InfoAboutme from "./InfoAboutme";
import { updateResize } from "../updateResize";


const TextAboutme = () => {
    const textImgRef = useRef()
    const titleRef = useRef()
    const containerRef = useRef(null)

    const [isVisible, setIsVisible] = useState(false)

    const callbackFunction = (entries) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
        if (isVisible) {
            textImgRef.current.style.opacity = "0.3";
            titleRef.current.style.opacity = "1";
            titleRef.current.style.letterSpacing = "3px";
            updateResize(textImgRef, "right");
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
        <div className='content' ref={containerRef} id="aboutMe">
            <div className='textAboutMe' ref={textImgRef}>
                <img src={textAboutMe} alt="Title" />
            </div>
            <h2 className="titleSection" ref={titleRef}>About me</h2>
        </div>
        <br />
        <InfoAboutme />
    </>
)
}

export default TextAboutme