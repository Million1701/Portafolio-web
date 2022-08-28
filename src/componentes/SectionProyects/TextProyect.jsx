import React, { useRef, useEffect, useState } from "react";
import textProyect from '../../imagenes/proyect.png';
import { updateResize } from "../updateResize";
import ContentProyects from "./ContentProyects";


const TextProyect = () => {
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
            updateResize(textImgRef,"left")
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
        <div className='content' ref={containerRef} id="proyects">
            <div className='textProyect' ref={textImgRef}>
                <img src={textProyect} alt="Title" />
            </div>
            <h2 className="titleSection" ref={titleRef}>Proyects</h2>
        </div>
        <br />
        <ContentProyects />
    </>
)
}

export default TextProyect