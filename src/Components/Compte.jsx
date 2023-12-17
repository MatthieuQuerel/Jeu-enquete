import {Component} from 'react';
import './CSS/Personne.css';

//import { useParams } from "react-router-dom";

class Compte extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: '',
          Password: '',
          
          
         
        };
      }
    
      handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({ [e.target.name]: value});
        
        
        this.setState({ [e.target.Password]: e.target.value });
        this.setState({ [e.target.Email]: e.target.value });
        
      };
      Champsremplie = async () => {
        if (
          this.state.Password === "" ||
          this.state.Email === "" 
         
        ) {
          alert("Il manque des infos");
        } else {
           
          try {
            if (this.state.Email !== undefined) {
              const options = {
                method: 'POST', // HTTP method
                headers: {
                  'Content-Type': 'application/json' // Specify that we are sending JSON data
                  // You can add other headers if needed
                },
                body: JSON.stringify(this.state) // Convert the data to JSON format
              };
            const response = await fetch('http://localhost:8081/Compte',options)
          
            // const responseData = await response.text();
            // console.log('Server Response:', responseData);
          
            if (response.ok) {
              console.log('envoie avec succès');
            } else {
              console.error('erreur envoie form data');
            }
          }
          } catch (error) {
            console.error('Network error:', error);
          }     
       
      }
      };
      
    
      handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle the form submission using this.state.Nom
     
        
        
        
        console.log('adresse submitted:', this.state.Password);
        
        console.log('licencier submitted:', this.state.Email);
        
        console.log('date Naissance submitted:', this.state.Conection);
        
       
      };
    
      render() {
        return (
          <div>
            <h1>Compte</h1>
            <form className="add-person-form" onSubmit={this.handleSubmit}>
             
              <label>
              <input type="email" name="Email" value={this.state.Email} onChange={this.handleChange} placeholder="Email" />
              </label>
              <label>
                
                <input type="password" name="Password"  value={this.state.Password} onChange={this.handleChange} placeholder="PassWord" />
              </label>
            
             
              
              <button  onClick={this.Champsremplie}>Ajouter</button>
            </form>
           
          </div>
        );
      }
}

export default Compte;
