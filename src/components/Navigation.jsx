import { useState } from "react";
import logoImage from "../images/logo.svg";
import hamburgerMenuIcon from "../images/icon-hamburger.svg";
import closeMenuIcon from "../images/icon-close.svg"

const Navigation = () => {
	
	const [openMenu, setOpenMenu] = useState(false)

	return (
		<header>
			<nav className="flex flex-row items-center lg:justify-between py-5 max-w-screen-lg justify-around  mx-auto">
				<img src={logoImage} alt="INSURE Logo" />

				<button onClick={() => {setOpenMenu(!openMenu)}}  className="md:hidden">
					<img src={openMenu ? `${closeMenuIcon}` : `${hamburgerMenuIcon}`} alt="menu" />
				</button>

				<div className={`md:hidden  md:flex md:flex-row  xl:flex xl:flex-row items-center gap-5 ${openMenu ? 'absolute top-14 bg-[var(--dark-violet)]  w-full flex flex-col py-10' : 'hidden'}`}>
					<ul className={`flex md:flex-row gap-5 text-sm  md:text-gray-500 tracking-widest ${openMenu ? 'flex-col text-center' : ''}`}>
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
