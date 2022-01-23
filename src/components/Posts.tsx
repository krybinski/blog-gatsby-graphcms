import React from 'react';
import PostItem from './PostItem';
import { graphql, useStaticQuery } from 'gatsby';
import { PostsData } from '../types';

interface Props {}

const Posts: React.FC<Props> = () => {
	const {
		blog: { posts },
	} = useStaticQuery<PostsData>(graphql`
		query PostsQuery {
			blog {
				posts {
					id
					title
					shortDescription
					slug
				}
			}
		}
	`);

	return (
		<section className="my-10 mx-auto max-w-7xl px-4 sm:px-6 mt:my-12 lg:px-8 lg:my-20">
			<header className="mb-5">
				<h2 className="text-2xl tracking-tight font-extrabold lg:text-4xl">Articles</h2>
			</header>
			{posts.map((post) => (
				<PostItem key={post.slug} post={post} />
			))}
		</section>
	);
};

export default Posts;
