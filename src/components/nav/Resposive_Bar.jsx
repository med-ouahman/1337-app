import style from "./Resposive_Bar.module.css";

import { NavLink } from "react-router-dom";
function ResposiveBar({ setShowNavBar })
{
    return (
            <div className={style.resBar}>
                <div className={style.logo_b}>
                <NavLink className={style.logo} to="/"><p className={style.logop}>1337++</p></NavLink>
                <button onClick={() => setShowNavBar(false)}>&times;</button>
                </div>
                <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/news">News</NavLink></li>
                <li><NavLink to="/experiences">Experiences</NavLink></li>
                <li><NavLink to="/questions">Questions</NavLink></li>
                <li><NavLink to="/FAQ">FAQ</NavLink></li>
                <NavLink className={style.login1} to="/login">Login</NavLink>
                </ul>
            </div>
    );
}

export default ResposiveBar;