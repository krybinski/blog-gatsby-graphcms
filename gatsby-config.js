require('dotenv').config();

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
	],
};
