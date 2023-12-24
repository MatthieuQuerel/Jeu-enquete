import {Component} from 'react';


//import { useParams } from "react-router-dom";

class AuthentificationGood extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
          data: [],
          
         
        };
      }
    

    
      render() {
        return (
          <div>
            <h1>Authentification Good</h1>
            <p>you are authenticated correctly so this is worth 50 points for the score</p>
          </div>
        );
      }
}

export default AuthentificationGood;
