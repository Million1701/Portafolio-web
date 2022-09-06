import React, { useRef, useEffect, useState } from "react";

import img1Planti from '../../imagenes/imgPlantillas/img1P.png';
import img2Planti from '../../imagenes/imgPlantillas/img2P.jpg';
import img3Planti from '../../imagenes/imgPlantillas/img3P.jpg';
import img4Planti from '../../imagenes/imgPlantillas/img4P.jpg';
import img5Planti from '../../imagenes/imgPlantillas/img5P.jpg';
import img6Planti from '../../imagenes/imgPlantillas/img6P.jpg';
import img7Planti from '../../imagenes/imgPlantillas/img7P.jpg';
import img8Planti from '../../imagenes/imgPlantillas/img8P.jpg';
import img9Planti from '../../imagenes/imgPlantillas/img9P.jpg';
import img10Planti from '../../imagenes/imgPlantillas/img10P.jpg';
import calculadora from '../../imagenes/calculadoraImg.jpg';
import alarma from '../../imagenes/alarma.jpg';

const plantillas = [{
    href : 'Plantillas/apartamentos.html',
    src : img1Planti,
    alt: 'apartment'
},{
    href : 'Plantillas/app-laucher.html',
    src : img2Planti,
    alt: 'app-laucher'
},{
    href : 'Plantillas/cafe.html',
    src : img3Planti,
    alt: 'cafe'
},{
    href : 'Plantillas/fotografo2.html',
    src : img4Planti,
    alt: 'fotografo2'
},{
    href : 'Plantillas/fotografo3.html',
    src : img5Planti,
    alt: 'fotografo3'
},{
    href : 'Plantillas/janemoda.html',
    src : img6Planti,
    alt: 'janemoda'
},{
    href : 'Plantillas/jeans.html',
    src : img7Planti,
    alt: 'jeans'
},{
    href : 'Plantillas/pizza.html',
    src : img8Planti,
    alt: 'pizza'
},{
    href : 'Plantillas/startup.html',
    src : img9Planti,
    alt: 'startup'
},{
    href : 'Plantillas/compañia.html',
    src : img10Planti,
    alt: 'compañia'
}] 

const ContentProyects = () => {
    const containerCalAlarRef = useRef()
    const calculatorRef = useRef()
    const alarmRef = useRef()

    
    const [isVisible, setIsVisible] = useState(false)
    const [isVisible2, setIsVisible2] = useState(false)

    const contentPlts = document.querySelector('#content-plts')
    
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    }

    const callbackPlantillas = (entries) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
        
        if (isVisible) {
            contentPlts.style.opacity = "1"
            contentPlts.style.transform = "translateX(0)"
        }
        
    }
    
    
    useEffect(() => {
        const observer = new IntersectionObserver(callbackPlantillas, options)
        if (contentPlts) {
            observer.observe(contentPlts)
        }
    })




    const optionsTwo = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    }


    const callbackProyectLogicos = (entries) => {
        const [entry] = entries
        setIsVisible2(entry.isIntersecting)

        if (isVisible2) {
            calculatorRef.current.style.opacity = "1"
            calculatorRef.current.style.transform = "translateX(0)"
            alarmRef.current.style.opacity = "1"
            alarmRef.current.style.transform = "translateX(0)"
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackProyectLogicos, optionsTwo)
        if (containerCalAlarRef.current) {
            observer.observe(containerCalAlarRef.current)
        }
    })

    return (
        <div className='proyects'>
            <h2 className='texts-proyects'>Plantillas de W3S</h2>
            <p id='subtitle'>Estas son plantillas de <b>W3S</b> que desarrolle desde cero para poder pulir un poco mis
                conocimientos en HTML5 y CSS3 <br />cuando recien empezaba.
            </p>
            <hr />
            <div id="container">
                <div className='content-plantillas' id="content-plts">
                    {plantillas.map((el) => (
                    <a key={el.alt} href={el.href} target="_blank" className='imgPlantilla' rel="noreferrer">
                        <img src={el.src} alt={el.alt}/>
                        <span className='target-plantilla'>{el.alt}</span>
                    </a> 
                    ))}
                </div>
            </div>
            <div className='content-calculator-alarm' ref={containerCalAlarRef}>
                <br />
                <br />
                <h2 className='texts-proyects'>Proyectos de Logica</h2>
                <br />
                <hr />
                <div className='proyects-programacion-logica'>
                <div className="calculator" ref={calculatorRef}>
                    <a href="Calculadora-Muzark/index.html" target="_blank" className="proyect-calculator-alarm" rel="noreferrer">
                        <img src={calculadora} alt="calculator" id='imgcalculator' />
                        <span className='target-programacion-logica'>Calculadora</span>
                    </a>
                    <figcaption style={{fontSize: '13px', width: "80%", margin:"5px auto"}}>Alarma programada en <b>Javascript</b> y diseñada con <b>CSS3</b></figcaption>
                </div>

                <div className="alarm" ref={alarmRef}>
                    <a href="alarma/reloj.html" target="_blank" className="proyect-calculator-alarm" rel="noreferrer">
                        <img src={alarma} alt="calculator" id='imgcalculator' />
                        <span className='target-programacion-logica'>Alarma</span>
                    </a>
                        <figcaption style={{fontSize: '13px', width: "80%", margin:"5px auto"}}>Para poder utilizar la alarma, descarga el repositorio en mi <b>github</b></figcaption>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ContentProyects