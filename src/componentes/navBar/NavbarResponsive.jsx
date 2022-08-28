import React, { useState } from 'react'
import { Link } from 'react-scroll';

const NavbarResponsive = () => {

    const [state, setState] = useState(false);


const showNavbar = () => {
    const bar1 = document.querySelector('.bar1');
    const bar2 = document.querySelector('.bar2');
    const bar3 = document.querySelector('.bar3');    
    const contentLinks = document.querySelector('.content-links');


    if(!state){
        bar1.style.transform = "rotate(45deg) translateY(3px) translateX(8px)"
        bar2.style.opacity = "0" 
        bar3.style.transform = "rotate(-45deg) translateY(-9px) translateX(14px)"
        contentLinks.style.right = "0"
        contentLinks.style.opacity = "1"

        
        
        setState(true)
        
    }else{
        bar1.style.transform = "rotate(0) translateY(0) translateX(0)"
        bar2.style.opacity = "1" 
        bar3.style.transform = "rotate(0) translateY(0) translateX(0)"
        contentLinks.style.right = "-100%"
        contentLinks.style.opacity = "0"

        setState(false)
    }

}
    
return (
        <>
            <div className='open-close'>
                {/* Icono bars para abrir */}
                <div className='content-bars' onClick={showNavbar}>
                    <div className='bars'>
                    <span className='bar bar1'></span>
                    <span className='bar bar2'></span>
                    <span className='bar bar3'></span>
                    </div>
                </div>
            </div>
        <div className='content-links'> 
            <div className='links-responsive'>
            <li><Link className='homeIcon' to='home' smooth={true} duration={500} delay={100} onClick={showNavbar}>home</Link></li>
            <li><Link to='abilities' smooth={true} duration={500} delay={100} onClick={showNavbar}>abilities</Link></li>
            <li><Link to='aboutMe' smooth={true} duration={500} delay={100} onClick={showNavbar}>about me</Link></li>
            <li><Link to="proyects" smooth={true} duration={500} delay={100} onClick={showNavbar}>proyects</Link></li>
            <li><Link to="contact" smooth={true} duration={500} delay={100} onClick={showNavbar}>contact</Link></li>
            </div>
        </div>
        </>
)
}

export default NavbarResponsive