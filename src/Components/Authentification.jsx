import {Component} from 'react';
import './CSS/Authentification.css';

//import { useParams } from "react-router-dom";

class Authentification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: '',
          Password: '',
          data: [],
          
         
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
           
          
            if (this.state.Email !== undefined) {
                const Mail = this.state.Email;

                const options = {
                  method: 'GET', // HTTP method
                  headers: {
                    'Content-Type': 'application/json' // Specify that we are sending JSON data
                  },
                };
          
                const url = `http://localhost:8081/Authentification?mail=${encodeURIComponent(Mail)}`;
                // window.location.href = url;
                fetch(url, options)
                  .then(response => {
                    console.log(response);
                    if (!response.ok) {
                      throw new Error('Échec de la requête');
                    }
                    return response.json();
                  })
                  .then(data => {
                    console.log('OK', data);
                    this.setState({
                      data: data // Correction ici
                    });
                  })
                  .catch(error => {
                    console.error('Erreur lors de la récupération des données :', error);
                  });
      }
      }
         
       
      
      }
      
    
      handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle the form submission using this.state.Nom
     
        const formData = new FormData(e.target);

  // Envoiez les données du formulaire à un serveur ou effectuez une autre action ici
  this.Champsremplie(formData);
        
        
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
              <input type="test" name="Email" value={this.state.Email} onChange={this.handleChange} placeholder="Email" />
              </label>
              <label>
                
                <input type="password" name="Password"  value={this.state.Password} onChange={this.handleChange} placeholder="PassWord" />
              </label>
            
             
              
              <button  onClick={this.Champsremplie}>Ajouter</button>
            </form>
            <ul >
                      {this.state.data.map((item, index) => ( 
                      <li key={index}>
                        <div >

                        
                             <p className="card-title">  {item.Mail}</p>
                             
                                                     
                        </div>               
                         </li> 
                      ))}
                    </ul>
          </div>
        );
      }
}

export default Authentification;
