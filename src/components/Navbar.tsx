import React from 'react';
import { FaAlignRight } from 'react-icons/fa';
import PageLinks from '../constants/PageLinks';

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="nav-center">
				<div className="nav-header">
					<img src="" className="logo" />
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
