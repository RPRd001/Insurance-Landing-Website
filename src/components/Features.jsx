import React from "react";
import iconSnappy from "../images/icon-snappy-process.svg";
import iconAffordable from "../images/icon-affordable-prices.svg";
import iconPeople from "../images/icon-people-first.svg";

const Features = () => {
	return (
		<section className="features pt-28  md:pt-80">
			<div className="max-w-screen-lg mx-auto px-5 md:px-0 flex flex-col items-center">
				<hr className="h-0.5 bg-[var(--very-dark-violet)] text-white w-40" />
				<h2 className="text-5xl font-normal mt-12 text-center md:text-start">
					We're different
				</h2>

				<div className="mt-12  md:mt-[8rem] flex flex-col  md:flex-row gap-5">
					<div className="flex flex-col md:items-start md:text-start items-center text-center gap-3">
						<img src={iconSnappy} alt="a thunder icon in a circle" />
						<h3 className="text-2xl font-bold">Snappy Process</h3>
						<p className="text-sm text-[var(--dark-grayish-violet)]">
							Our application process can be completed in minutes, not hours.
							Don't get stuck filling in tedious forms.
						</p>
					</div>

					<div className="flex flex-col md:items-start md:text-start items-center text-center gap-3">
						<img src={iconAffordable} alt="a dolar icon in a circle" />
						<h3 className="text-2xl font-bold">Affordable Prices</h3>
						<p className="text-sm text-[var(--dark-grayish-violet)]">
							We don't want you worrying about high monthly costs. Our prices
							may be low, but we still offer the best coverage possible.
						</p>
					</div>

					<div className="flex flex-col md:items-start md:text-start items-center text-center gap-3">
						<img src={iconPeople} alt="a person icon" />
						<h3 className="text-2xl font-bold">People First</h3>
						<p className="text-sm text-[var(--dark-grayish-violet)]">
							Our plans aren't full of conditions and clauses to prevent
							payouts. We make sure you're covered when you need it.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
