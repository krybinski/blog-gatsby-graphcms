import React from 'react';
import { Post } from '../types';
import { Link } from 'gatsby';

interface Props {
	post: Post;
}

const PostItem: React.FC<Props> = ({ post }) => {
	const { id, title, shortDescription, slug } = post;

	return (
		<article key={id}>
			<Link to={slug} className="block">
				<header className="block text-black">
					<h2 className="text-2xl">{title}</h2>
				</header>
				<span className="text-sm text-gray-500 lg:text-base">{shortDescription}</span>
			</Link>
		</article>
	);
};

export default PostItem;
