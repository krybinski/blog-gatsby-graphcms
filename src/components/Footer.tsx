import React from 'react';
import SocialLinks from '../constants/SocialLinks';

interface Props {}

const Footer: React.FC<Props> = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-white border-gray-200 px-2 sm:px-4 py-6 dark:bg-gray-700">
			<div className="container flex flex-col items-center justify-center">
				<SocialLinks />
				<span className="text-white text-sm">Kamil Rybiński &copy; {year}</span>
			</div>
		</footer>
	);
};

export default Footer;
