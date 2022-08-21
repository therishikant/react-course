import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css"

function MainNavigation(){
    return <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to="/">AllMeetups</Link>
                </li>
                <li>
                    <Link to="/new-meet"> Add New Meetups</Link>
                </li>
                <li>
                    <Link to="fav"> My Favorite</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;