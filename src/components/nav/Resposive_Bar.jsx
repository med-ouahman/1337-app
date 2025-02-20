import style from "./Resposive_Bar.module.css";
import Logo from "../../../public/imges/Untitled_design-removebg-preview.png";

function ResposiveBar({ setShowNavBar })
{
    return (
            <div className={style.resBar}>
                <div className={style.logo_b}>
                <a className={style.logo1} href="#"> <img src={Logo} alt="" /></a>
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