import React from 'react';
import MobileMenuLink from './MobileMenuLink';
import { NavLink } from '../types';

const data: NavLink[] = [
	{
		id: 1,
		text: 'Home',
		url: '/',
		last: false,
	},
	{
		id: 2,
		text: 'About me',
		url: '/about',
		last: true,
	},
	{
		id: 3,
		text: 'Contact',
		url: '/contact',
		last: true,
	},
];

const links = data.map((link) => <MobileMenuLink key={link.id} link={link} />);

interface Props {
	isOpen: boolean;
}

const MobileMenu: React.FC<Props> = ({ isOpen }) => {
	return (
		<div className={`w-full md:block md:w-auto ${!isOpen ? 'hidden' : ''}`} id="mobile-menu">
			<ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">{links}</ul>
		</div>
	);
};

export default MobileMenu;
