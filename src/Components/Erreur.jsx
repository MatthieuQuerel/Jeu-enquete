import './CSS/Erreur.css';
import { Link } from "react-router-dom"; 

const Erreur =()=>{
    return(
        <div className="Erreur">
            <h1 className="Titre"> Page Erreur </h1>
            <p className="Paragraphe"> not Found</p>

            
          <Link to="/">Retour a la page Acceil</Link>
        
        </div>
    )
};
export default Erreur;