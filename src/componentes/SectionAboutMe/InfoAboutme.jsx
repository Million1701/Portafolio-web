import React, { useRef, useEffect, useState } from "react";
import "./AboutMe.css"
import myperson from "../../imagenes/myPerson.jpg"

const InfoAboutme = () => {
    const imgPersonRef = useRef();
    const infoPersonRef = useRef();

    const text1Ref = useRef();
    const text2Ref = useRef();
    const text3Ref = useRef();
    const text4Ref = useRef();
    const descriptionRef = useRef();



    const [isVisibleImg, setIsVisibleImg] = useState(false)
    const [isVisibleInfo, setIsVisibleInfo] = useState(false)

    const imgObserve = (entries) => {
        const [entry] = entries
        setIsVisibleImg(entry.isIntersecting)
        
        if(isVisibleImg){
            setTimeout(() => {
                imgPersonRef.current.style.opacity = "1"
                imgPersonRef.current.style.transform = "translateX(0)"
            },100)
            
        }
    }

    const infoOberserve = (entries) => {
        const [entry] = entries
        setIsVisibleInfo(entry.isIntersecting)
        
        if(isVisibleInfo){
            text1Ref.current.style.transform = "translateX(0)"
            setTimeout(() => text2Ref.current.style.transform = "translateX(0)", 400)
            setTimeout(() => text3Ref.current.style.transform = "translateX(0)",600)
            setTimeout(() => text4Ref.current.style.transform = "translateX(0)",900)
            setTimeout(() => {
                descriptionRef.current.style.opacity = "1"
                descriptionRef.current.style.transform = "scale(1)"
            },300)
        }
    }

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: .4,
    }

    useEffect(() => {
        const observer = new IntersectionObserver(imgObserve, options)
        if (imgPersonRef.current) {
            observer.observe(imgPersonRef.current)
        }
    })

    useEffect(() => {
        const observer = new IntersectionObserver(infoOberserve, options)
        if (infoPersonRef.current) {
            observer.observe(infoPersonRef.current)
        }
    })

    return (
    <div id="content-info-aboutme">
        <div id='imgPerson'>
            <img src={myperson} alt="" ref={imgPersonRef} />
        </div>
        <div id="info-personality" ref={infoPersonRef}>
            <div className='title-info-aboutme'>
                <p className='text1-aboutme'><span className="greeting" ref={text1Ref}>Hola<span id="sig">!</span></span></p>
                <div className='texts-aboutme'>
                    <p className='text2-aboutme'><span ref={text2Ref}>Soy</span></p>
                    <p className='text3-aboutme'><span ref={text3Ref}>Daniel</span></p>
                </div>
                <p className='text4-aboutme'>
                    <span ref={text4Ref}>Developer web/Designer</span>
                </p>
            </div>

            <div>
                <div className='content-description'>
                    <p ref={descriptionRef}>
                        Mi nombre es <b>Daniel Jose Zabala Galvis</b>, tengo 20 años soy de <b>Venezuela. </b>
                        actualmente me dedico al Desarrollo de aplicaciones web cuento con 1 año de experiencia aprendiendo, 
                        siendo autodidacta desde lo basico hasta semiprofesional. Mis bases fuertes de conocimiento se
                        encuentran por ahora en el Frontend, A parte manejo diversos programas de diseño como Adobe Photoshop,
                        Illustrator, WordPress, Sony Vegas. Una de mis aspiraciones es querer siempre aprender algo nuevo no le temo a los errores
                        ya que de ellos es que aprendo cada dia mas.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoAboutme