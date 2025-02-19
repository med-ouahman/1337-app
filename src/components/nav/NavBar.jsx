import style from "./NavBar.module.css";
import Logo from "/goinfre/aben-el-/1337-app/public/images/1337++-removebg-preview.png";
import { FaBars } from "react-icons/fa6";
import ResposiveBar from "./Resposive_Bar";
import { useState } from "react";
import { href } from "react-router-dom";

function NavBar() {
	const [showNavBar, setShowNavBar] = useState(false);

    return (
	<>
	{showNavBar ? <ResposiveBar setShowNavBar={setShowNavBar} />
	:
	<div className={style.navBar}>
			<a className={style.logo} href="#"><p className={style.logop}>1337++</p></a>
			<ul>
				<li className={style.sideBar}><a href="/home">Home</a></li>
				<li className={style.sideBar}><a href="/news">News</a></li>
				<li className={style.sideBar}><a href="experiences">Experiences</a></li>
				<li className={style.sideBar}><a href="/FAQ">FAQ</a></li>
				<a href="#" className={`${style.sideBar} ${style.login}`} >Log in</a>
				<FaBars onClick={() => setShowNavBar(true)} className={`${style.faBars} ${style.hide}`}/>
			</ul>  
		</div>
	}
	</>
    );
}
export default NavBar;