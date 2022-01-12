import * as React from 'react';
import {Helmet} from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';

type MetaProps = JSX.IntrinsicElements['meta'];

interface Props {
	description?: string;
	lang?: string;
	meta?: MetaProps;
	title: string;
}

const Seo: React.FC<Props> = ({description, lang, meta, title}) => {
	const {site} = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
						keywords
						image
					}
				}
			}
		`
	);

	const defaultTitle: string = site.siteMetadata?.title;
	const metaDescription: string = description || site.siteMetadata.description;
	const keywords: string = site.siteMetadata.keywords;
	const image: string = site.siteMetadata.image;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					name: `keywords`,
					content: keywords,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					property: `og:image`,
					content: image,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:image`,
					content: image,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata?.author || ``,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
				// @ts-ignore
			].concat(meta)}
		/>
	);
};

Seo.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
	keywords: ``,
	image: ``,
};

export default Seo;
