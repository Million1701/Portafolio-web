import React, { useRef } from "react";
import './Letrasbg.css'
import tSu from '../../imagenes/texto_su.png';
import teña from '../../imagenes/texto_eña.png';
import textEn from '../../imagenes/text-en.png';
import textGran from '../../imagenes/texto_gran.png';
import textNde from '../../imagenes/texto_nde.png';



export default function LetrasBg() {
    let refSOne = useRef(),
        refSTwo = useRef(),
        refE = useRef(),
        refGOne = useRef(),
        refGTwo = useRef();


    window.addEventListener("load", function () {
        animation(window.innerWidth <= 1100)
    });

    window.addEventListener("resize", function () {
        animation(window.innerWidth <= 1100)
    });

    const animation = (widthTablet) => {
        if (widthTablet) {
            setTimeout(() => {
                refSOne.current.style.right = "122px";
                refSTwo.current.style.right = "-14px";
                refE.current.style.right = "-14px";
            }, 100)
            setTimeout(() => {
                refGOne.current.style.right = "155px";
                refGTwo.current.style.right = "-14px";
            }, 200)
        } else {
            setTimeout(() => {
                refSOne.current.style.right = "211px";
                refSTwo.current.style.right = "-14px";
                refE.current.style.right = "-14px";
            }, 100)

            setTimeout(() => {
                refGOne.current.style.right = "275px";
                refGTwo.current.style.right = "-14px";
            }, 200)
        }

    }

    return (
        <div className="content-text">
            <p className="text">
                <img alt="texto-sueña1" src={tSu} id="texto-su" ref={refSOne} />
                <img alt="texto-sueña2" src={teña} id="texto-eña" ref={refSTwo} />
            </p>
            <h3 className="text">
                <img alt="texto-en" src={textEn} id="texto-en" ref={refE} />
            </h3>
            <h2 className="text">
                <img alt="texto-grande1" src={textGran} id="texto-grande1" ref={refGOne} />
                <img alt="texto-grande2" src={textNde} id="texto-grande2" ref={refGTwo} />

            </h2>
        </div>
    )
}
