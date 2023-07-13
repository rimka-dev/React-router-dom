import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  // on peut utiliser NavLink au lieu de Link car NavLink possede un objet isActive = true si on est sur la route du lien si non false
  return (
    <div>
        <nav>
            <NavLink to="/" style={({isActive})=> {
              return isActive ? {color: "rgb(246, 102, 102)",
                fontWeight: "bold"}:{color: "white"}
            }}>Accueil</NavLink>
            <NavLink to="/services"className={({isActive})=> isActive ? "activeLink" : "" }>Services</NavLink>
            <NavLink to="/profil"className={({isActive})=> isActive ? "activeLink":"" }>Profil</NavLink>
            <NavLink to="/contact"className={({isActive})=> isActive ? "activeLink":"" }>Contact</NavLink>
        </nav>
    </div>
  )
}

export default Navbar;
