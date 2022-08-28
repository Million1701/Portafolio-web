import React, { useEffect, useRef} from 'react'
import { Link } from 'react-scroll';


const NavbarTwo = ({abilitie, aboutMe, proyects,contact,positionY }) => {
    const visibleRef = useRef()
    useEffect(() =>{
    if(positionY >= 100){
        visibleRef.current.style.opacity = "1"
    }
})

    return (
            <div className="links-fixeds" ref={visibleRef}>
                <li className="link"><Link to='abilities' smooth={true} duration={500} delay={100}>{abilitie}</Link></li>
                <li className="link"><Link to='aboutMe' smooth={true} duration={500} delay={100}>{aboutMe}</Link></li>
                <li className="linkHome"><Link to='home' smooth={true} duration={500} delay={100}>
                <lord-icon
                    src="https://cdn.lordicon.com/igpbsrza.json"
                    trigger="morph"
                    colors="primary:#ffffff"
                    style={{width:"60px",
                            height:"37px",
                            display:"block",
                            margin:"0 auto"}}>                            
                </lord-icon>
                </Link></li>
                <li className="link"><Link to="proyects" smooth={true} duration={500} delay={100}>{proyects}</Link></li>
                <li className="link"><Link to="contact" smooth={true} duration={500} delay={100}>{contact}</Link></li>
            </div>
    )
}

export default NavbarTwo