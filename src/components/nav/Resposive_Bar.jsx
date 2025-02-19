import style from "./Resposive_Bar.module.css";

function ResposiveBar({ setShowNavBar })
{
    return (
            <div className={style.resBar}>
                <div className={style.logo_b}>
                <a className={style.logo} href="#"><p className={style.logop}>1337++</p></a>
                <button onClick={() => setShowNavBar(false)}>&times;</button>
                </div>
                <ul>
                <li >Home</li>
                <li>News</li>
                <li>Experiences</li>
                <li>Questions</li>
                <a className={style.login1} href="#">Log in</a>
                </ul>
            </div>
    );
}

export default ResposiveBar;