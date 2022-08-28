import './Head.css'
import React, { useState, useEffect } from 'react';
import imgHead from '../../imagenes/imgHead.jpg';
import Stars from './Stars';

let contador = 0
const ImgHead = (props) => {
    const { title } = props

    const [escribir, setEscribir] = useState(title)
    const [decrement, setDecrement] = useState(escribir)
    const [increment, setIncrement] = useState(escribir)

    useEffect(() => {
        let titleDecrement;
        let titleIncrement;
        const intervalo = setInterval(() => {

            if (escribir !== "") {
                titleDecrement = decrement.slice(0, escribir.length - 1)
                setEscribir(escribir => escribir = titleDecrement)
                setDecrement(decrement => decrement = titleDecrement)
            }

            if (decrement === "") {
                contador += 1
                titleIncrement = increment.slice(0, contador)
                setEscribir((escribir) => escribir = titleIncrement)
                setIncrement(increment)

                if (contador === increment.length + 10) {
                    contador = 0
                    titleDecrement = titleIncrement
                }
            }
        }, 120)

        return () => {
            clearInterval(intervalo)
        }
    }, [escribir, decrement, increment]);

    return (
        <>
            <img src={imgHead} alt='imagen' id="imgHead" />
            <Stars />
            <div className='text-head'>
                <h1>{escribir}<span id='barra'>|</span></h1>
            </div>
        </>
    )
}

export default ImgHead;