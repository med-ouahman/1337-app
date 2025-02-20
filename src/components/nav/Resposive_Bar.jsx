import style from "./Resposive_Bar.module.css";

function ResposiveBar({ setShowNavBar })
{
    return (
            <div className={style.resBar}>
                <div className={style.logo_b}>
                <a className={style.logo} href="/"><p className={style.logop}>1337++</p></a>
                <button onClick={() => setShowNavBar(false)}>&times;</button>
                </div>
                <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/experiences">Experiences</a></li>
                <li><a href="/questions">Questions</a></li>
                <li><a href="/FAQ">FAQ</a></li>
                <a className={style.login1} href="/login">Login</a>
                </ul>
            </div>
    );
}

export default ResposiveBar;