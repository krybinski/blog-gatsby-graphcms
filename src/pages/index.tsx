import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Hero from '../components/Hero';
import Posts from '../components/Posts';

const IndexPage = () => {
	return (
		<Layout>
			<Seo title="Home" />
			<Hero />
			<Posts />
		</Layout>
	);
};

export default IndexPage;
