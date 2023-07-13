import React from 'react'
import { useLocation } from 'react-router-dom'

function Contact() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Section contact</h1>
      <p>Ici on utilise <b>useLocation()</b> pour recuperer des props passé depuis un lien Link dans le composent App.JS</p>
      <p>Je suis un props envoyer depuis une balise Link : {location.state}</p>
    </div>
  )
}

export default Contact
