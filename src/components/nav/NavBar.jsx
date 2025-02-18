import style from "./NavBar.module.css";
import Logo from "../../../public/imges/Untitled_design-removebg-preview.png"

function NavBar() {
    return (
		<div className={style.parent}>
			<div className={style.navBar}>
				<a className={style.logo} href="#"> <img src={Logo} alt="" /></a>
				<ul>
				<li>Home</li>
				<li>News</li>
				<li>Experiences</li>
				<li>Questions</li>
				<a className={style.login} href="#">Log in</a>
				</ul>
			</div>
		</div>
    );
}
export default NavBar;