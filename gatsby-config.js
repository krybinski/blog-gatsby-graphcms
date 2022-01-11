require('dotenv').config();
require('ts-node').register({
	compilerOptions: {
		module: 'commonjs',
		target: 'es2017',
	},
});

module.exports = {
	siteMetadata: {
		title: 'Wondrous World of Whale Watching',
		description: 'Come and enjoy an experience of a lifetime! Watch whales with us!',
		// author: '@krybinski',
		// keywords: 'whales, marine life, trip, recreation',
		// image: 'src/images/whale-watching.jpg',
	},
	plugins: [
		{
			resolve: 'gatsby-source-graphql',
			options: {
				typeName: 'Blog',
				fieldName: 'blog',
				url: process.env.GRAPHCMS_ENDPOINT,
			},
		},
		'gatsby-plugin-sass',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-typescript',
			options: {
				isTSX: true,
				jsxPragma: 'jsx',
				allExtensions: true,
			},
		},
	],
};
