module.exports = {
	extends: [
		"./index",
	],
	plugins: [
		"import",
		"no-relative-import-paths",
	],
	rules: {
		"import/extensions": [
			"error",
			"ignorePackages",
		],
		"no-relative-import-paths/no-relative-import-paths": [
			"error",
			{
				prefix: "@",
				rootDir: "./src",
			},
		],
	},
};
