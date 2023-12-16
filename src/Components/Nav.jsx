
import { Link } from "react-router-dom";
import './CSS/Nav.css';

const NavBar =()=> {
  return(
    <nav className="navbar">
      <Link className="AuthentificationBTN" to={{pathname: `/Authentification`}}><button>Authentification</button></Link> 
      <ul>
        <li>
          <Link to="/">Welcome</Link>
        </li>
        <li>
            <Link to="/Start">start</Link>
        </li>
        <li>
            <Link to="/Answer">Answer</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;