import "./Main.css";

export default function Main()
{
    return(
        <main className="main__section">
            <h1 className="header"> Fun facts about React</h1>
            <ul className="react__facts__list">
                <li>Was first released in 2013</li>
                <li>Was originally created by jordan walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    );
}