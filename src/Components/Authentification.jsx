import {Component} from 'react';
import './CSS/Personne.css';

//import { useParams } from "react-router-dom";

class Authentification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: '',
          Password: '',
          Delete: false,
          Conection: false, 
         
        };
      }
    
      handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value,[e.target.Conection]: e.target.value,[e.target.Delete]: e.target.value,[e.target.Password]: e.target.value,[e.target.Email]: e.target.value  });
        // this.setState({ [e.target.Conection]: e.target.value }); 
        // this.setState({ [e.target.Delete]: e.target.value });
        // this.setState({ [e.target.Password]: e.target.value });
        // this.setState({ [e.target.Email]: e.target.value });
        
      };
      Champsremplie = async () => {
        if (
          this.state.Password === "" ||
          this.state.Email === "" 
         
        ) {
          alert("Il manque des infos");
        } else {
           
          try {
            const response = await fetch('http://localhost:8081/Authentification', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(this.state),
            });
          
            const responseData = await response.text();
            console.log('Server Response:', responseData);
          
            if (response.ok) {
              console.log('envoie avec succès');
            } else {
              console.error('erreur envoie form data');
            }
          } catch (error) {
            console.error('Network error:', error);
          }     
        
    
       }
      };
      
    
      handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle the form submission using this.state.Nom
     
        
        console.log('prenom submitted:', this.state.Delete);
        
        console.log('adresse submitted:', this.state.Password);
        
        console.log('licencier submitted:', this.state.Email);
        
        console.log('date Naissance submitted:', this.state.Conection);
        
       
      };
    
      render() {
        return (
          <div>
            <h1>Authentification</h1>
            <form className="add-person-form" onSubmit={this.handleSubmit}>
             
              <label>
               
                <input type="text" name="Email"  value={this.state.Email} onChange={this.handleChange} placeholder="e-mail" />
              </label>
              <label>
                
                <input type="text" name="Password"  value={this.state.Password} onChange={this.handleChange} placeholder="PassWord" />
              </label>
              <label>
              connection:
                <input type="checkbox" name="connection"  value={this.state.Conection} onChange={this.handleChange} />
              </label>
              <label>
              delete:
                <input type="checkbox" name="delete" value={this.state.Delete} onChange={this.handleChange} />
              </label>
              
              <button  onClick={this.Champsremplie}>Ajouter</button>
            </form>
           
          </div>
        );
      }
}

export default Authentification;
