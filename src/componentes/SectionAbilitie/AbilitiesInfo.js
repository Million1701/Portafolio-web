import React, { useRef, useEffect, useState } from "react";
import Progress from '../Progress/Progress'
import styled from 'styled-components'
import html5 from '../../imagenes/html5.png'
import css3 from '../../imagenes/css3.png'
import javascript from '../../imagenes/js.png'
import react from '../../imagenes/react.png'
import laptopAbi from '../../imagenes/laptopAbi.png'

const InfoAbilities = styled.div`
    position: relative;
    display: flex;
    justify-content: 'center';
    align-items: center;

    @media (max-width: 1100px) {
    flex-direction: column;

    .text-progress{
        margin: 0px 0 15px 0;
    }
  }
`;


const ImgLaptop = styled.div`
    opacity: 0;
    text-align: center;
    z-index: -1;
    padding: 30px 0 0 0;
    transform: translateX(50%);
    transition: opacity 1s ease, transform .7s cubic-bezier(0.36, 0.35, 0.01, 0.94);
    img{
        width: 70%;
    }

    @media (max-width: 1100px) {
    flex-direction: column;

    img{
        padding: 30px 0 0 0;
        width: 60%;
    }
  }
`;

const ContentBars = styled.div`
    margin-left: 30px;
    width: 60%;
    display: flex;
    flex-direction: column;
    opacity: 0;
    transform: translateY(150px);
    transition: opacity .5s ease, transform .5s ease;
    padding: 30px 0 0 0;
    h3{
        text-align:left;
        padding-left:20px;
    }

    @media (max-width: 1100px) {
    width: 100%;

    h3{
        text-align:center;
        padding-left:0px;
    }
  }
`;

const AbilitieInfo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    margin: 15px 0;

    .react{
        width: 74px;
        height: 64px;
    }

    img{
        display: block;
        margin: 0 auto;
        opacity: 1;
        transition: opacity 1s ease;
    }

    @media (max-width: 1100px) {
        grid-template-columns: 1fr;
    }

`;



function AbilitiesInfo() {
    const contentBarsRef = useRef(null)
    const imgLaptopRef = useRef()

    const [isVisibleInfo, setIsVisibleInfo] = useState(false)

    const showInformation = (entries) => {
        const [entry] = entries
        setIsVisibleInfo(entry.isIntersecting)

        if (isVisibleInfo) {
            contentBarsRef.current.style.opacity = 1;
            contentBarsRef.current.style.transform = "translateY(0)";
            imgLaptopRef.current.style.opacity = "1";
            imgLaptopRef.current.style.transform = "translateX(0)";
        }
    }

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    }

    useEffect(() => {
        const observer = new IntersectionObserver(showInformation, options)
        if (contentBarsRef.current) {
            observer.observe(contentBarsRef.current)
        }
    })

    return (
        <InfoAbilities>
            <ContentBars ref={contentBarsRef}>
                <AbilitieInfo>
                    <div className="text-progress">
                        <img src={html5} alt="html5" />
                    </div>
                    < Progress
                        isVisibleInfo={isVisibleInfo}
                        done={"100"}
                        background={"linear-gradient(90deg, rgba(255,153,53,1) 0%, rgba(245,140,46,1) 56%, rgba(200,78,12,1) 100%)"}
                        boxShadow={"0 3px 3px -5px rgba(255,153,53,1), 0 2px 5px  rgba(200,78,12,1)"} />
                    <h3>HTML 5</h3>
                </AbilitieInfo>
                <br />
                <AbilitieInfo>
                    <div>
                        <img src={css3} alt="css3" />
                    </div>
                    <Progress
                        isVisibleInfo={isVisibleInfo}
                        done={"95"}
                        background={"linear-gradient(90deg, rgba(37, 211, 246, 1) 0%, rgba(13, 144, 241, 1) 80%, rgba(17, 99, 209, 1) 100%)"}
                        boxShadow={"0 3px 3px -5px rgba(37,211,246,1), 0 2px 5px  rgba(17,99,209,1)"} />
                    <h3>CSS3</h3>
                </AbilitieInfo>
                <br />
                <AbilitieInfo>
                    <div>
                        <img src={javascript} alt="javascript" />
                    </div>
                    <Progress
                        isVisibleInfo={isVisibleInfo}
                        done={"60"}
                        background={"linear-gradient(90deg, rgba(255,222,75,1) 0%, rgba(255,220,61,1) 74%, rgba(153,141,0,1) 100%)"}
                        boxShadow={"0 3px 3px -5px rgba(255,222,75,1), 0 2px 5px  rgba(153,141,0,1)"} />
                    <h3>JAVASCRIPT</h3>
                </AbilitieInfo>
                <br />
                <AbilitieInfo>
                    <div>
                        <img src={react} alt="react" className='react' />
                    </div>
                    <Progress
                        isVisibleInfo={isVisibleInfo}
                        done={"10"}
                        background={"linear-gradient(90deg, rgba(37, 211, 246, 1) 0%, rgba(13, 144, 241, 1) 80%, rgba(17, 99, 209, 1) 100%)"}
                        boxShadow={"0 3px 3px -5px rgba(37,211,246,1), 0 2px 5px  rgba(17,99,209,1)"} />
                    <h3>REACT</h3>
                </AbilitieInfo>
            </ContentBars>
            <ImgLaptop ref={imgLaptopRef}>
                <img src={laptopAbi} alt="LaptopAbi" />
            </ImgLaptop>
        </ InfoAbilities>
    )
}

export default AbilitiesInfo