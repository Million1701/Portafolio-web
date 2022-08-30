import React, { useRef, useEffect, useState } from "react";
import "./Contact.css"
import textProyect from '../../imagenes/textContact.png';
import { updateResize } from "../updateResize";
import ContentContact from "./ContentContact";


const TextContact = () => {
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
        <div className='content' ref={containerRef} id="contact">
            <div className='textContact' ref={textImgRef}>
                <img src={textProyect} alt="Title" />
            </div>
            <h2 className="titleSection" ref={titleRef}>Contact</h2>
        </div>
        <br />
        <ContentContact />
    </>
  )
}

export default TextContact