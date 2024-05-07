const Ribbon = () => {
	return (
		<section className="flex flex-col items-center justify-center">
			<div className="my-[10rem] w-full md:h-[15rem]   max-w-screen-lg bg-[var(--dark-violet)] text-[var(--very-light-gray)] flex flex-col md:flex-row items-center md:justify-between px-10 py-10 gap-5  md:px-20">
				<h2 className="text-4xl font-normal text-wrap">
					Find out more
					<br /> about how we work
				</h2>
				<button className="font-bold text-sm  border-2  border-[var(--very-light-gray)] px-4 py-2">
					HOW WE WORK
				</button>
			</div>
		</section>
	);
};

export default Ribbon;
