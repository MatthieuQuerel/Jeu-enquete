import './CSS/Reponse.css';
import { Component } from 'react';

class Reponse extends Component {
    constructor(props) {
        super(props);
        this.state = {
        Nom:"",
          Reponse: '',
          
        };
      }
    
      handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        this.setState({ [e.target.Reponse]: e.target.value }); 

     
       
      };
      Champsremplie = async () => {
        if (
          this.state.Reponse === "" 
         
        ) {
          alert("Il manque des infos");
        } else {
          try {
            if( this.state.Reponse ==="Jules"){
                alert("You win");
            } else{
                alert("You have lose sorry");
            }
            const options = {
                method: 'POST', // HTTP method
                headers: {
                  'Content-Type': 'application/json' // Specify that we are sending JSON data
                  // You can add other headers if needed
                },
                body: JSON.stringify(this.state) // Convert the data to JSON format
              };
            const response = await fetch('http://localhost:8081/Reponse',options)
       
        // const responseData = await response.text();
        // console.log('Server Response:', responseData);
      
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
      
        
        console.log('prenom submitted:', this.state.Reponse);
        
      
      };
    
      render() {
        return (
          <div>
            <h1>Killeur</h1>
            <form className="add-person-form" onSubmit={this.handleSubmit}>
             
              <label>
              Response:
                <input type="text" name="Reponse"  value={this.state.Reponse} onChange={this.handleChange} placeholder="Reponse" />
              </label>
              
              <button  onClick={this.Champsremplie}>Ajouter</button>
            </form>
          
          </div>
        );
      }
}
export default Reponse;

