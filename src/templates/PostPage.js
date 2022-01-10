import React from 'react';
import Layout from '../components/Layout';

const PostPage = ({pageContext: {post}}) => {
	return (
		<Layout>
			<h1>{post.title}</h1>
			<div dangerouslySetInnerHTML={{__html: post.content.html}} />
		</Layout>
	);
};

export default PostPage;
