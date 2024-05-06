import logoImage from "../images/logo.svg";
import facebookIcon from "../images/icon-facebook.svg";
import twitterIconX from "../images/icon-twitter.svg";
import pinterestIcon from "../images/icon-pinterest.svg";
import instagramIcon from "../images/icon-instagram.svg";
import footerPatternDesktop from "../images/bg-pattern-footer-desktop.svg";

// var(--very-light-gray)

const Footer = () => {
	return (
		<footer className="bg-[var(--very-light-gray)]">
			<img className="absolute" src={footerPatternDesktop} alt="" />
			<section className="relative py-[5rem]  max-w-screen-lg mx-auto">
				<div className="flex flex-col gap-5 md:flex-row md:gap-0 items-center justify-between">
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

				<div className="flex flex-col items-center text-start  md:flex-row md:items-start md:justify-between mt-10 text-sm max-w-screen-md md:self-start gap-5 md:gap-0">
					<div className="flex flex-col md:items-start md:justify-around">
						<span className="text-[var(--dark-grayish-violet)]">
							OUR COMPANY
						</span>
						<ul className="md:mt-8 flex flex-col">
							<li>HOW WE WORK</li>
							<li>WHY INSURE?</li>
							<li>VIEW PLANS</li>
							<li>REVIEWS</li>
						</ul>
					</div>
					<div className="flex flex-col md:items-start md:justify-around">
						<span className="text-[var(--dark-grayish-violet)]">HELP ME</span>
						<ul className="md:mt-8 flex flex-col">
							<li>FAQ</li>
							<li>TERMS OF USE</li>
							<li>PRIVACY POLICY</li>
							<li>COOKIES</li>
						</ul>
					</div>
					<div className="flex flex-col md:items-start md:justify-around">
						<span className="text-[var(--dark-grayish-violet)]">HELP ME</span>
						<ul className="md:mt-8 flex flex-col">
							<li>FAQ</li>
							<li>TERMS OF USE</li>
							<li>PRIVACY POLICY</li>
							<li>COOKIES</li>
						</ul>
					</div>
					<div className="flex flex-col md:items-start md:justify-around">
						<span className="text-[var(--dark-grayish-violet)]">HELP ME</span>
						<ul className="md:mt-8 flex flex-col">
							<li>FAQ</li>
							<li>TERMS OF USE</li>
							<li>PRIVACY POLICY</li>
							<li>COOKIES</li>
						</ul>
					</div>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
