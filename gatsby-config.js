module.exports = {
	plugins: [
		{
			resolve: 'gatsby-source-graphql',
			options: {
				typeName: 'Blog',
				fieldName: 'blog',
				url: 'YOUR_API_URL'
			}
		}
	]
};
