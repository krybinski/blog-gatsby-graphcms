module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			modules: true
		}
	},
	rules: {
		indent: ['error', 'tab'],
		'no-tabs': 0,
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		'eol-last': ['error', 'always'],
		'max-len': ['error', 160],
		'max-statements-per-line': [
			'error',
			{
				max: 1
			}
		],
		'space-infix-ops': 'error',
		'space-unary-ops': [
			'error',
			{
				words: true,
				nonwords: false
			}
		],
		'spaced-comment': ['error', 'always'],
		'comma-dangle': ['error', 'never'],
		'react/prop-types': 0
	}
};
