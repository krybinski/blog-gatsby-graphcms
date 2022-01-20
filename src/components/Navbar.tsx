import React, { useState } from 'react';
import NavLogo from './NavLogo';
import MobileMenu from './MobileMenu';
import MobileButton from './MobileButton';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-white border-gray-200 px-2 sm:px-4 py-5 dark:bg-gray-700">
			<div className="container flex flex-wrap justify-between items-center mx-auto">
				<NavLogo />
				<MobileButton isOpen={isOpen} toggle={(value) => setIsOpen(value)} />
				<MobileMenu isOpen={isOpen} />
			</div>
		</nav>
	);
};

export default Navbar;
