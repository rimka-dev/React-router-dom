import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
       <h1>React Router dom</h1>
      <p><b>Pour installer router :</b> npm install react-retour-dom</p>
      <p> <b>Etape 1 :</b>  importer BowserRouter dans index.js puis entourer le composent App avec "BrowserRouter" </p>
      <p><b>Etape 2 :</b>  importer Routes et Route dans le composent App ou on veux l'utiliser</p>
      <p style={{fontWeight:"bold"}}>
        &lt;Routes&gt; <br></br>
      &lt;Route path="/" element=&#123;&lt;Home/&gt;&#125;/&gt;<br></br>
      &lt;/Routes&gt;
      </p>
      <p><b>Etape 3 :</b>  créer une nav bar avec les balises <b>Link</b><br></br>&lt;Link to="/"&gt;Home&lt;Link/&gt; </p>
      <p>On peut utiliser <b>NavLink</b>  au lieu de Link car NavLink possède un objet isActive = true si on est sur la route du lien sinon false</p>
      <p>On utilise <b>useParams()</b> si on veux passé des paramétres dans l'url exemple ID ici : </p>
      <p>  &lt;Route path="/profil/:id" element=&#123;&lt;Profile/&gt;&#125;/&gt; </p>
      <p>Puis dans le composent Profile useParams() vas retourner un objet &#123; id: 'notre id' &#125;</p>
      <p>On peut utiliser <b> useLocation()</b> pour recuperer des informations et des states passé depuis une balise Link </p>
      <p>comme par exemple ici depuis le lien contact qui vas vers le composent contact et dans se composent on peut utilisé useLocation() pour recuperer les states passé</p>
      <Link to="/contact" state = {"test state"}>
        contact
      </Link>
    </div>
  )
}

export default Home;
