import React from 'react';
import { Link } from 'gatsby';

const Hero = () => {
	return (
		<header className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
			<div className="text-left">
				<h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
					<span className="block">
						Hi{' '}
						<span role="img" aria-label="twtr">
							👋
						</span>{' '}
						I'm
					</span>{' '}
					<span className="block text-4xl text-indigo-600 sm:text-6xl md:text-7xl lg:text-8xl">Kamil Rybiński</span>
				</h1>
				<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl lg:mx-0">
					I work as a Full Stack Developer. The purpose of creating this blog was to organize the knowledge and improve
					my English skills.
				</p>
				<div className="mt-5 sm:mt-8 sm:flex justify-start">
					<div className="rounded-md shadow">
						<Link
							to="/about"
							className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-3 md:text-lg md:px-10">
							About me
						</Link>
					</div>
					<div className="ml-0 mt-2 sm:mt-0 sm:ml-5">
						<Link
							to="/contact"
							className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-3 md:text-lg md:px-10">
							Contact
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Hero;
