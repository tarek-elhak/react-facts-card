import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import "./app.css";

export default function App()
{
    const [darkMode,setDarkMode] = React.useState(false)

    function toggleDarkMode()
    {
        setDarkMode(prevState => !prevState)
    }

    return (
        <>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <Main darkMode={darkMode}/>
        </>
    );
}