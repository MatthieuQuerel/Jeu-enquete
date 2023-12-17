import './App.css'
import NavBar from './Components/Nav.jsx';
import Footer from './Components/Footer.jsx';
import Welcome from './Components/welcome.jsx';
import Answer from './Components/Answer.jsx';
import Start from './Components/start.jsx';
import Personne from './Components/Personne.jsx';
import Authentification from './Components/Authentification.jsx';
import Compte from './Components/Compte.jsx';
import Erreur from './Components/Erreur.jsx';

import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">

        <NavBar />
        <Routes >
          <Route path="/" exact element={<Welcome />} />
          <Route path="/Compte" exact element={<Compte />} />
          <Route path="/Authentification" exact element={<Authentification />} />
           <Route path="/Start" exact element={<Start />} /> 
           <Route path="/Start/:nom" exact element={<Personne />} /> 
           <Route path="/Answer" exact element={<Answer />} />
          <Route path="*" element={<Erreur />} />
        </Routes>
       
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
