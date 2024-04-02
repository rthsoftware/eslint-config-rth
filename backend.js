module.exports = {
	extends: [
		"./index",
	],
	plugins: [
		"import",
	],
	rules: {
		"import/extensions": [
			"error",
			"ignorePackages",
		],
	},
};
