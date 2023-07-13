import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Service() {
  // ici on utilise des route imbriquer voir dans App.js
  // Outlet nous permet d'afficher les composents ciblé par nos link et nos route imbriquer
  return (
    <div>
      <h1>Section Services</h1>
      <nav>
        <Link to="/services/developpement">Développement</Link>
        <Link to="/services/cybersecurite">Cyber sécurité</Link>
      </nav>
      <h4>ici on utilise des Link et des routes imbriqués</h4>
      <p>Puis pour afficher le contenu des routes imbriqués on utilise la balise <b>&lt;Outlet&gt;</b> </p> 
      <Outlet></Outlet>
    </div>
  )
}

export default Service
