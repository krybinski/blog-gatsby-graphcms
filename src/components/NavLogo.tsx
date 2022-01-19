import React from 'react';
import { Link } from 'gatsby';

const NavLogo: React.FC = () => {
	return (
		<Link to="/" className="flex">
			<span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">FRONTE</span>
		</Link>
	);
};

export default NavLogo;
