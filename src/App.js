import './App.css';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Contac from './components/Contact/Contact';
import Profil from './components/Profile/Profile';
import Service from './components/Service/Service';
import Davelopment from './components/Service/Development/Development';
import CyberSecurity from './components/Service/CyberSecurity/CyberSecurity';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Service/>}>
          <Route path='/services/developpement' element={<Davelopment/>} /> 
          <Route path='/services/cybersecurite' element={<CyberSecurity/>} /> 
        </Route>
        <Route path="/contact" element={<Contac/>}/>
        <Route path="/profil/:id" element={<Profil/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
