import React from 'react';
import {Link} from 'gatsby';

const Navbar = () => {
	return (
		<div className="nav">
			<ul className="nav__list">
				<li className="nav__item">
					<Link to="/">Home</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
