import React from "react";
import logoImage from "../images/logo.svg";
import facebookIcon from "../images/icon-facebook.svg";
import twitterIconX from "../images/icon-twitter.svg";
import pinterestIcon from "../images/icon-pinterest.svg";
import instagramIcon from "../images/icon-instagram.svg";
import footerPatternDesktop from "../images/bg-pattern-footer-desktop.svg"

// var(--very-light-gray)

const Footer = () => {
	return (
		<footer className="bg-[var(--very-light-gray)]">
			<img className="absolute"  src={footerPatternDesktop} alt="" />
			<section className="relative py-[5rem]  max-w-screen-lg mx-auto">
				<div className="flex flex-col  md:flex-row items-center justify-between">
					<img src={logoImage} alt="INSURE Logo" />

					<ul className="flex flex-row items-center gap-3">
						<li>
							<img src={facebookIcon} alt="facebook icon" />
						</li>
						<li>
							<img src={twitterIconX} alt="x icon" />
						</li>
						<li>
							<img src={pinterestIcon} alt="pinterest icon" />
						</li>
						<li>
							<img src={instagramIcon} alt="instagram icon" />
						</li>
					</ul>
				</div>

				<hr className="mt-8" />

				<div className="flex flex-col items-center md:flex-row md:items-start justify-between mt-10 text-sm max-w-screen-md self-start">
					<div className="flex flex-col items-start justify-around">
						<span className="text-[var(--dark-grayish-violet)]">OUR COMPANY</span>
						<ul className="mt-8 flex flex-col gap-3">
							<li>HOW WE WORK</li>
							<li>WHY INSURE?</li>
							<li>VIEW PLANS</li>
							<li>REVIEWS</li>
						</ul>
					</div>
					<div className="help">
						<span className="text-[var(--dark-grayish-violet)]">HELP ME</span>
						<ul className="mt-8 flex flex-col gap-3">
							<li>FAQ</li>
							<li>TERMS OF USE</li>
							<li>PRIVACY POLICY</li>
							<li>COOKIES</li>
						</ul>
					</div>
					<div className="contact">
						<span className="text-[var(--dark-grayish-violet)]">CONTACT</span>
						<ul className="mt-8 flex flex-col gap-3">
							<li>SALES</li>
							<li>SUPPORT</li>
							<li>LIVE CHAT</li>
						</ul>
					</div>
					<div className="others">
						<span className="text-[var(--dark-grayish-violet)]">OTHERS</span>
						<ul className="mt-8 flex flex-col gap-3">
							<li>CAREERS</li>
							<li>PRESS</li>
							<li>LICENSES</li>
						</ul>
					</div>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
