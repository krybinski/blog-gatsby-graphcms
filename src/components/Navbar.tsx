import React from 'react';
import { Link } from 'gatsby';
import { FaAlignRight } from 'react-icons/fa';
import PageLinks from '../constants/PageLinks';

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="nav-center">
				<div className="nav-header">
					<Link to="/">
						<span className="logo">Fronte</span>
					</Link>
					<button type="button" className="toggle-btn">
						<FaAlignRight></FaAlignRight>
					</button>
				</div>
				<PageLinks styleClass="nav-links"></PageLinks>
			</div>
		</nav>
	);
};

export default Navbar;
