import {Component} from 'react';
import {Link} from "react-router-dom";
import './CSS/welcome.css';
class Welcome extends Component {


    render() {
        return (
           <div className="Welcome">
            <h1>Welcome mister Roderick Alleyn</h1>
            <p>
                Hello Mr Jean we need you to find the killer because there was a murder the murderer is a young man who is a carrer for that I would need you to find the killer to help you the murder weapon is a hammer. to find the killer you will either have to navigate in the search bar or otherwise use the navigation buttons it s up to you I think you ll get there
           </p>
           
           <Link to="/Start"><button >To start</button></Link>
           </div>
        )
    }
}
export default Welcome;