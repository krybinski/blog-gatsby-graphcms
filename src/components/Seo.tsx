import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';

const Seo = ({title, description, meta, lang}) => {
	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={title ? `%s | ${title}` : null}
			meta={[
				{
					name: 'description',
					content: description,
				},
				{
					property: 'og:title',
					content: title,
				},
				{
					property: 'og:description',
					content: description,
				},
				{
					property: 'og:type',
					content: 'website',
				},
			].concat(meta)}
		/>
	);
};

Seo.defaultProps = {
	title: '',
	description: '',
	meta: [],
	lang: 'en',
};

Seo.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	lang: PropTypes.string,
};

export default Seo;
