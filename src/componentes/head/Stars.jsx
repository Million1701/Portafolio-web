import React, { useState } from 'react';
import estrellas from '../../imagenes/estrellas.png';
import styled from 'styled-components';

const StyleStars = styled.div`
    position: absolute;
    bottom: ${(props) => props.Bottom};
    left: ${(props) => props.Left};
    transform: ${(props) => props.Scale};
    transition: all .5s ease;
    @media (max-width: 1100px) {
        img{
            width: 110px;
        }
    }
`

const StyleStarsTwo = styled.div`
    position: absolute;
    top: ${(props) => props.Top};
    right: ${(props) => props.Right};
    transform: ${(props) => props.Scale};
    transition: all .5s ease;
    @media (max-width: 1100px) {
        img{
            width: 110px;
        }
    }
`

function Stars() {
    const [loading, setLoading] = useState(false)

            window.addEventListener("load", () => {
                setTimeout(() => {
                    setLoading(true)
                }, 100)
            })


    return(
        <>

        <StyleStars
            Bottom={loading ? "30px" : '0px'}
            Left={loading ? '30px' : '0px'}
            Scale={loading ? 'scale(1)' : 'scale(1.5)'}>
            <img src={estrellas} alt="stars" />
        </StyleStars>
        <StyleStarsTwo
            Top={loading ? "30px" : '0px'}
            Right={loading ? '30px' : '0px'}
            Scale={loading ? 'scale(1)' : 'scale(1.5)'}>
            <img src={estrellas} alt="stars" />
        </StyleStarsTwo>    
    </>
)
}

export default Stars