import {Component} from 'react';
import './CSS/Answer.css';
class Answer extends Component {
    state = {
        data: [],
     }
    componentDidMount() {
        fetch('http://localhost:8081/Answer',{
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
      Supp = async ()=>{
        console.log('click')
        const options = {
          method: 'DELETE', // HTTP method
          headers: {
            'Content-Type': 'application/json',
            'Accept-Charset': 'utf-8', // Specify that we are sending JSON data
            // You can add other headers if needed
          },
         
        };
      const response = await fetch('http://localhost:8081/Answer',options)
    
      // const responseData = await response.text();
      // console.log('Server Response:', responseData);
    
      if (response.ok) {
        console.log('envoie avec succès');
      } else {
        console.error('erreur envoie form data');
      }
      }

    render() {
        return (
           <div className="Answer">
            <h2>Killer is :</h2>
            <ul className='DescriptionAnswer'>
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
                    <div className ="BTN">
                    <button className ="BTNDELETE" onClick={this.Supp}> Delete all replies </button>
                    </div>
                    
           </div>
        )
    }
}
export default Answer;