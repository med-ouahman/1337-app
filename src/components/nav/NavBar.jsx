import style from "./NavBar.module.css";

function NavBar() {
    return (
		<div className={style.parent}>
			<div className={style.navBar}>
				<a href="#">logo</a>
				<ul>
				<li>Home</li>
				<li>news</li>
				<li>experiences</li>
				<li>Questions</li>
				<a href="#">log in</a>
				</ul>
			</div>
		</div>
    );
}
export default NavBar;