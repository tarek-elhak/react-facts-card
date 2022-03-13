import ReactDOM from "react-dom";
import react_logo from "./assets/react-logo.png";

const logo = (
    <img src={react_logo} alt="react-logo" width="80px"/>
);

const header = (
    <h1> Fun facts about React</h1>
);

const facts = (
    <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by jordan walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by facebook</li>
        <li>powers thousands of enterprise apps, including mobile apps</li>
    </ul>
);

ReactDOM.render(
    <div>
        {logo}
        {header}
        {facts}
    </div>,
    document.querySelector("#root")
);