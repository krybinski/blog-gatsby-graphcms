import React from 'react';
import { SocialLink } from '../types';

interface Props {
	link: SocialLink;
}

const SocialLinkItem: React.FC<Props> = ({ link }) => {
	return (
		<li>
			<a href={link.url} rel="nofollow noopener noreferrer" className="text-2xl" target="_blank">
				{link.icon}
			</a>
		</li>
	);
};

export default SocialLinkItem;
