import React, { useRef } from 'react';
import "./RedesSociales.css";


function RedesSociales(props) {
    const { instagram, pinterest, github } = props

    let redesRefIns = useRef();
    let redesRefGitHub = useRef();
    let redesRefPint = useRef();

    const showRedes = () => {
        setTimeout(() => {
            redesRefIns.current.style.transform = "scale(1)"
            redesRefGitHub.current.style.transform = "scale(1)"
            redesRefPint.current.style.transform = "scale(1)"

        }, 300)
    }


    window.addEventListener("load", showRedes);
    return (
        <div className='content-redesS'>
            <a ref={redesRefIns} alt="Intagram" href={instagram} className="redSocial" target="_blank" rel='noreferrer'>
                <i alt="Intagram" className="fa fa-instagram"></i>
            </a>
            <a ref={redesRefGitHub} alt="GitHub" href={github} className="redSocial" id="GitHub" target="_blank" rel='noreferrer'>
                <i alt="github" class="fa fa-github"></i>
            </a>
            <a ref={redesRefPint} alt="Pinterest" href={pinterest} className="redSocial" id="Pinterest" target="_blank" rel='noreferrer'>
                <i alt="Pinterest" className="fa fa-pinterest-p"></i>
            </a>
        </div>
    )
}


export default RedesSociales;
