import React from 'react';
import { Link } from 'gatsby';
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
		text: 'About',
		url: '/about',
		last: true,
	},
];

const links = data.map((link) => {
	const borderClasses = !link.last ? 'border-b border-gray-100 dark:border-gray-700' : '';

	return (
		<li key={link.id}>
			<Link
				to={link.url}
				className={`block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${borderClasses}`}>
				{link.text}
			</Link>
		</li>
	);
});

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
