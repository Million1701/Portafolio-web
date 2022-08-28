import React, {useState, useEffect} from 'react'
import NavBar from './NavBar'
import NavbarResponsive from './NavbarResponsive'
import NavbarTwo from './NavbarTwo'

const Navbars = () => {
const [positionY, setPositionY] = useState(0)
const [resize, setResize] = useState(window.innerWidth)

useEffect(() => {
    window.addEventListener("scroll", () => {
        setPositionY(window.scrollY);
    })

    return () => {
        window.removeEventListener("scroll", () => {})
    }
})

useEffect(() => {
  window.addEventListener("resize", () => {
    setResize(window.innerWidth)
  })
})

  return (
    <div>
        {positionY < 100 ? <NavBar abilitie="Abilities" aboutMe="About me" proyects="proyects" contact="contact" />:
        <NavbarTwo abilitie="Abilities" aboutMe="About me" proyects="proyects" contact="contact" positionY={positionY}/>}
        {resize < 800 && <NavbarResponsive/>}
    </div>
  )
}

export default Navbars