import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Page Not Found : Error 404</h1>
        <button onClick={()=>navigate('/')}>Retour à l'accueil</button>
    </div>
  )
}

export default NotFound
