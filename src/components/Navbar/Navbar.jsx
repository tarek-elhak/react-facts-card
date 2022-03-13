import react_logo from "../../assets/react-logo.png";
import "./Navbar.css";

export default function Navbar ()
{
    return (
        <nav className="nav__bar">
            <img src={react_logo} alt="react logo" className="logo__image"/>
            <h3 className="logo__text">ReactFacts</h3>
        </nav>
    );
}