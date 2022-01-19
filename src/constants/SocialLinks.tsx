import React from 'react';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { SocialLink } from '../types';

const data: SocialLink[] = [
	{
		id: 1,
		icon: <FaLinkedin className="social-icon"></FaLinkedin>,
		url: 'https://pl.linkedin.com/in/kamil-rybinski-346b99b1',
	},
	{
		id: 2,
		icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
		url: 'https://github.com/krybinski',
	},
];

const links = data.map((link) => {
	return (
		<li key={link.id}>
			<a href={link.url} className="social-link">
				{link.icon}
			</a>
		</li>
	);
});

interface Props {
	styleClass: string;
}

const SocialLinks: React.FC<Props> = ({ styleClass }) => {
	return <ul className={`social-links ${styleClass ? styleClass : ''}`}>{links}</ul>;
};

export default SocialLinks;
