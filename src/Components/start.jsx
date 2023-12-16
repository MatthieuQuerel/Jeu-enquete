import {Component} from 'react';
import './CSS/Start.css';
import { Link } from "react-router-dom";
import Reponse from "./Response.jsx"
class Start extends Component {
    state = {
        data: [],
     }
    componentDidMount() {
        fetch('http://localhost:8081/Start',{
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
           <div className="Start">
            <div>
            <h1>Start : </h1>
            </div>
            <ul className='Metier'>
                      {this.state.data.map((item, index) => ( 
                      <li key={index}>
                        <div className='BTNReponse'>

                        <Link to={{
                          
                          pathname: `/Start/${item.NomMetier}`
                              
                            }}><button> {item.NomMetier}</button>
                              
                            </Link> 
                                                     
                        </div>               
                         </li> 
                      ))}
                    </ul>
                    <Reponse />
           </div>
        )
    }
}
export default Start;