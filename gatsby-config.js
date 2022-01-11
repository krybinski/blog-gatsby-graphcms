require('dotenv').config();

require('ts-node').register({
	compilerOptions: {
		module: 'commonjs',
		target: 'es2017',
	},
});

module.exports = {
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
	],
};
