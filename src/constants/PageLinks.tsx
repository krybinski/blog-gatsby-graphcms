import React from 'react';
import { Link } from 'gatsby';
import { NavLink } from '../types';

const data: NavLink[] = [
	{
		id: 1,
		text: 'home',
		url: '/',
	},
	{
		id: 2,
		text: 'about',
		url: '/about',
	},
];

const links = data.map((link) => {
	return (
		<li key={link.id}>
			<Link to={link.url}>{link.text}</Link>
		</li>
	);
});

interface Props {
	styleClass: string;
}

const PageLinks: React.FC<Props> = ({ styleClass }) => {
	return <ul className={`page-links ${styleClass ? styleClass : ''}`}>{links}</ul>;
};

export default PageLinks;
