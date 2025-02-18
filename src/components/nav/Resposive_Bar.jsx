import style from "./Resposive_Bar.module.css";
import Logo from "../../../public/imges/Untitled_design-removebg-preview.png";

function ResposiveBar()
{
    return (
        <div className={style.par}>
            <div className={style.resBar}>
                <a className={style.logo1} href="#"> <img src={Logo} alt="" /></a>
                <ul>
                <li>Home</li>
                <li>News</li>
                <li>Experiences</li>
                <li>Questions</li>
                <a className={style.login1} href="#">Log in</a>
                </ul>
            </div>
        </div>
    );
}

export default ResposiveBar;