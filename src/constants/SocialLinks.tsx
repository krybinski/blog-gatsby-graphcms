import React from 'react';
import SocialLinkItem from './SocialLinkItem';
import { FaLinkedin, FaGithubSquare, FaPinterestSquare } from 'react-icons/fa';
import { SocialLink } from '../types';

const data: SocialLink[] = [
	{
		id: 1,
		icon: <FaLinkedin className="text-white"></FaLinkedin>,
		url: 'https://pl.linkedin.com/in/kamil-rybinski-346b99b1',
	},
	{
		id: 2,
		icon: <FaGithubSquare className="text-white"></FaGithubSquare>,
		url: 'https://github.com/krybinski',
	},
	{
		id: 3,
		icon: <FaPinterestSquare className="text-white"></FaPinterestSquare>,
		url: 'https://pl.pinterest.com/kamilryba19',
	},
];

const links = data.map((link) => <SocialLinkItem key={link.id} link={link} />);

interface Props {}

const SocialLinks: React.FC<Props> = () => {
	return <ul className="flex space-x-3 mb-3">{links}</ul>;
};

export default SocialLinks;
