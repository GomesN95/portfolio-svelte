module.exports = {
	extends: [
	  'eslint:recommended',
	  'plugin:svelte/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		// ...
		project: 'path/to/your/tsconfig.json',
		extraFileExtensions: ['.svelte']
	  },
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
			  parser: '@typescript-eslint/parser'
			}
		}
	],
	rules: {
	  // override/add rules settings here, such as:
	  // 'svelte/rule-name': 'error'
	}
  };

// module.exports = {
	// env: {
	// 	'browser': true,
	// 	'es2021': true
	// },
	// extends: [
	// 	'eslint:recommended',
	// 	'plugin:@typescript-eslint/recommended',
	// 	'plugin:@typescript-eslint/recommended-requiring-type-checking',
	// 	'airbnb-typescript/base',
	// 	'plugin:import/errors',
	// 	'plugin:import/warnings',
	// 	'plugin:import/typescript',
	// 	'plugin:svelte/recommended',
	// ],
	// overrides: [
	// 	{
	// 		'env': {
	// 			'node': true
	// 		},
	// 		'files': [
	// 			'.eslintrc.{js,cjs}'
	// 		],
	// 		'parserOptions': {
	// 			'sourceType': 'script'
	// 		},
	// 		files: ['*.svelte'],
    //   		parser: 'svelte-eslint-parser'
	// 	}
	// ],
	// parser: '@typescript-eslint/parser',
	// parserOptions: {
	// 	ecmaVersion: 'latest',
	// 	sourceType: 'module',
	// 	extraFileExtensions: ['.svelte']
	// },
	// plugins: [
	// 	'@typescript-eslint'
	// ],
	// rules: {
	// 	'max-len': ['warn', {
	// 		'code': 160,
	// 		'ignoreRegExpLiterals': true,
	// 	  }],
	// 	'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
	// 	'indent': [
	// 		'error',
	// 		'tab'
	// 	],
	// 	'linebreak-style': [
	// 		'error',
	// 		'windows'
	// 	],
	// 	'quotes': [
	// 		'error',
	// 		'single'
	// 	],
	// 	'semi': [
	// 		'error',
	// 		'always'
	// 	]
	// }
// };
