import React from 'react';
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


    return(
        <>
        <StyleStars
            Bottom="30px"
            Left='30px'
            Scale='scale(1)'>
            <img src={estrellas} alt="stars" />
        </StyleStars>
        <StyleStarsTwo
            Top="30px"
            Right="30px"
            Scale="scale(1)">
            <img src={estrellas} alt="stars" />
        </StyleStarsTwo>    
    </>
)
}

export default Stars