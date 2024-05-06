import heroImageDesktop from "../images/image-intro-desktop.jpg";

const Hero = () => {
	return (
		<section className="hero  md:py-24 md:max-h-[36rem]">
			<div className="flex flex-col-reverse  md:flex-row xl:max-w-screen-lg xl:mx-auto">
				<div className="py-10 px-5 flex flex-col md:items-start md:text-start items-center text-center">
					<hr className="hidden md:static  h-0.5 bg-white text-white w-40" />
					<h1 className="text-5xl font-normal mt-12">
						Humanizing your insurance
					</h1>
					<p className="mt-6">
						Get your life insurance coverage easier and faster. We blend our
						expertise and technology to help you find the plan that$apos;s right for
						you. Ensure you and your loved ones are protected.
					</p>
					<button className="font-bold text-sm  border-2 border-[var(--very-light-gray)] px-4 py-2 mt-6">
						VIEW PLANS
					</button>
				</div>

				<img
					className="heroImageDesktop"
					src={heroImageDesktop}
					alt="a family walking outside"
				/>
			</div>
		</section>
	);
};

export default Hero;
