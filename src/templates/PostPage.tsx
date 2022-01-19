import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { Post } from '../types';

interface Props {
	pageContext: {
		post: Post;
	};
}

const PostPage: React.FC<Props> = ({ pageContext: { post } }) => {
	return (
		<Layout>
			<Seo title={post.title} description="Post description here" />

			<h1>{post.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: post.content.html }} />
		</Layout>
	);
};

export default PostPage;
