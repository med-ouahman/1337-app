import style from "./NavBar.module.css";


import { FaBars } from "react-icons/fa6";
import ResposiveBar from "./Resposive_Bar";
import { useState } from "react";

import { NavLink } from "react-router-dom";

function NavBar() {

	const [showNavBar, setShowNavBar] = useState(false);

  return (
	<>
		{
		showNavBar ? <ResposiveBar setShowNavBar={setShowNavBar} />
		:
		<nav className={style.navBar}>
			<NavLink className={style.logo} to="/" > <img src="/imges/Untitled_design-removebg-preview.png" alt="logo" /></NavLink>
			<ul>
				<li className={style.sideBar}><NavLink to="/">Home</NavLink></li>
				<li className={style.sideBar}><NavLink to="/news">News</NavLink></li>
				<li className={style.sideBar}><NavLink to="/experiences">Experiences</NavLink></li>
				<li className={style.sideBar}><NavLink to="/questions">Questions</NavLink></li>
				<li className={style.sideBar}><NavLink to="/FAQ">FAQ</NavLink></li>
				<li><NavLink to="/login" className={`${style.sideBar} ${style.login}`} >Login</NavLink></li>
				<FaBars onClick={() => setShowNavBar(true)} className={style.faBars}/>
			</ul>  
			</nav>
		}
		</>
  );
}


export default NavBar;