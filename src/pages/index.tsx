import React from 'react';
import {graphql, useStaticQuery, Link} from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import '../scss/main.scss';

const IndexPage = () => {
	const {
		blog: {posts},
	} = useStaticQuery(postsQuery);

	return (
		<Layout>
			<Seo title="Home" />

			{posts.map(({id, title, slug}) => (
				<div key={id}>
					<h2>{title}</h2>
					<Link to={slug}>Link</Link>
				</div>
			))}
		</Layout>
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
