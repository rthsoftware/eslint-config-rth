module.exports = {
	extends: [
		"./index",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:jsx-a11y/recommended",
	],
	plugins: [
		"react",
		"jsx-a11y",
		"no-relative-import-paths",
	],
	rules: {
		"jsx-a11y/no-autofocus": "off",
		"no-relative-import-paths/no-relative-import-paths": [
			"error",
			{
				prefix: "@",
				rootDir: "./src",
			},
		],
		"react/jsx-closing-bracket-location": "error",
		"react/react-in-jsx-scope": "off",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
