import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

const IndexPage = () => {
	const { blog: { posts } } = useStaticQuery( postsQuery );

	return (
		<div>
			{posts.map(({ id, title, slug }) => (
				<div key={id}>
					<h2>{title}</h2>
					<Link to={slug}>Link</Link>
				</div>
			))}
		</div>
	);
};

const postsQuery = graphql`
	query PostsQuery {
		blog {
			posts {
				id
				title
				slug
			}
		}
	}
`;

export default IndexPage;
