import React from 'react';
import {Link} from 'gatsby';
import {NavLink} from '../types';

const data: NavLink[] = [
	{
		id: 1,
		text: 'home',
		url: '/',
	},
	{
		id: 2,
		text: 'about',
		url: '/about/',
	},
	{
		id: 3,
		text: 'projects',
		url: '/projects/',
	},
	{
		id: 5,
		text: 'contact',
		url: '/contact/',
	},
];

const links = data.map((link) => {
	return (
		<li key={link.id}>
			<Link to={link.url}>{link.text}</Link>
		</li>
	);
});

export default ({styleClass}) => {
	return <ul className={`page-links ${styleClass ? styleClass : ''}`}>{links}</ul>;
};
