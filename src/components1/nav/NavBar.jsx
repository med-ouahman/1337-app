import style from "./NavBar.module.css";
import Logo from "../../../public/imges/Untitled_design-removebg-preview.png";
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
			<a className={style.logo} href="#"> <img src={Logo} alt="" /></a>
			<ul>
				<li className={style.sideBar}>Home</li>
				<li className={style.sideBar}>News</li>
				<li className={style.sideBar}>Experiences</li>
				<li className={style.sideBar}>Questions</li>
				<a href="#" className={`${style.sideBar} ${style.login}`} >Log in</a>
				<FaBars onClick={() => setShowNavBar(true)} className={style.faBars}/>
			</ul>  
		</div>
	}
	</>
    );
}
export default NavBar;