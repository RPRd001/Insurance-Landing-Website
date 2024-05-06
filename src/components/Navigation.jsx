import { useState } from "react";
import logoImage from "../images/logo.svg";
import hamburgerMenuIcon from "../images/icon-hamburger.svg";

const Navigation = () => {
	const [menuState, setMenuState] = useState(false);

	const handleMenuState = () => {
		/*
			How to make this interact with
			the elements containing the menu?

			In Vanilla JS I would use query selectors
			but here...? How do I do that?
		*/

		if (!menuState) {
			alert("Menu Opened");
			setMenuState(true);
		} else {
			alert("Menu Closed");
			setMenuState(false);
		}
	};

	return (
		<header>
			<nav className="flex flex-row items-center lg:justify-between py-5 max-w-screen-lg justify-around  mx-auto">
				<img src={logoImage} alt="INSURE Logo" />

				<button onClick={handleMenuState} className="md:hidden">
					<img src={hamburgerMenuIcon} alt="menu" />
				</button>

				<div className="hidden  md:flex md:flex-row  xl:flex xl:flex-row items-center gap-5">
					<ul className="flex flex-row gap-5 text-sm  text-gray-500 tracking-widest">
						<li>HOW WE WORK</li>
						<li>BLOG</li>
						<li>ACCOUNT</li>
					</ul>
					<button className="font-bold text-sm  border-2 border-black px-4 py-2">
						VIEW PLANS
					</button>
				</div>
			</nav>
		</header>
	);
};

export default Navigation;
