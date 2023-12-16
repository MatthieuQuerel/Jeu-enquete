import {Component} from 'react';
import './CSS/Personne.css';
import { Link } from "react-router-dom";
//import { useParams } from "react-router-dom";

class Personne extends Component {
    state = {
        data: [],
     }
    componentDidMount() {
        var url = window.location.href;
        var parts = new URL(url).pathname.split("/");
        const result = parts[2];
        fetch(`http://localhost:8081/Start/${result}`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          
        }
      })
          .then(response => {
            if (!response.ok) {
              throw new Error('Échec de la requête');
            }
            return response.json();
          })
          .then(data => { console.log('OK', data)
            this.setState({
              data: data  // Correction ici
            });
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
          });
      }

  render() {
    return (
      

      <div className="Personne">
      <Link className="PersonneBTN" to={{pathname: `/Start`}}><button>Retour</button></Link> 
     
      <ul className='DescriptionPersonne'>
                      {this.state.data.map((item, index) => ( 
                      <li key={index}>
                        <div className="card">

                        <img className="card-Photo" src={item.Photo} />
                             <p className="card-title">  {item.Nom}</p>
                             <p className="card-description" >  {item.Description}</p>
                                                     
                        </div>               
                         </li> 
                      ))}
                    </ul>
      </div>
      
    );
  }
}

export default Personne;
