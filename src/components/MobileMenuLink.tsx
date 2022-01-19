import React from 'react';
import { Link } from 'gatsby';
import { NavLink } from '../types';

interface Props {
	link: NavLink;
}

const MobileMenuLink: React.FC<Props> = ({ link }) => {
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
};

export default MobileMenuLink;
