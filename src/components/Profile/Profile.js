import React from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h2>Bienvenu sur votre profil.</h2>
      <p>param depuis l'url : {params.id}</p>
    </div>
  )
}

export default Profile
