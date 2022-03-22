import react_logo from "../../assets/react-logo.png";
import "./Navbar.css";

export default function Navbar (props)
{
    return (
        <nav className={props.darkMode ? "nav__bar dark": "nav__bar"}>
            <div className="nav__brand">
                <img src={react_logo} alt="react logo" className="logo__image"/>
                <h3 className="logo__text">ReactFacts</h3>
            </div>
            <div className="toggle">
                <span className="toggle__light">light</span>
                <div className="toggle__slider" onClick={props.toggleDarkMode}>
                    <div className="toggle__slider__circle"/>
                </div>
                <span className="toggle__dark">dark</span>
            </div>
        </nav>
    );
}