import React from 'react';
import { Link } from 'gatsby';

const Hero = () => {
	return (
		<header className="hero">
			<div className="section-center hero-center">
				<article className="hero-info">
					<div>
						<div className="underline"></div>
						<h1>I'm Kamil</h1>
						<h2>full-stack developer</h2>
						<Link to="/contact" className="btn">
							contact me
						</Link>
					</div>
				</article>
			</div>
		</header>
	);
};

export default Hero;
