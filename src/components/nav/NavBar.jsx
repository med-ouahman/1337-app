import style from "./NavBar.module.css";
import { FaBars } from "react-icons/fa6";
import ResposiveBar from "./Resposive_Bar";
import { useState } from "react";


function NavBar() {
	const [showNavBar, setShowNavBar] = useState(false);

    return (
	<>
	{showNavBar ? <ResposiveBar setShowNavBar={setShowNavBar} />
	:
	<div className={style.navBar}>
			<a className={style.logo} href="/"><p className={style.logop}>1337++</p></a>
			<ul>
				<li className={style.sideBar}><a href="/">Home</a></li>
				<li className={style.sideBar}><a href="/news">News</a></li>
				<li className={style.sideBar}><a href="/experiences">Experiences</a></li>
				<li className={style.sideBar}><a href="/questions">Questions</a></li>
				<li className={style.sideBar}><a href="/FAQ">FAQ</a></li>
				<a href="/login" className={`${style.sideBar} ${style.login}`} >Log in</a>
				<FaBars onClick={() => setShowNavBar(true)} className={`${style.faBars} ${style.hide}`}/>
			</ul>  
		</div>
	}
	</>
    );
}
export default NavBar;