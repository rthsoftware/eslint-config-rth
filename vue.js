module.exports = {
	extends: [
		"./index",
		"@vue/eslint-config-typescript",
		"plugin:vue/vue3-essential",
		"plugin:vuejs-accessibility/recommended",
	],
	parser: "vue-eslint-parser",
	parserOptions: {
		ecmaVersion: "latest",
		parser: "@typescript-eslint/parser",
		project: "./tsconfig.json",
		sourceType: "module",
	},
	plugins: [
		"vuejs-accessibility",
		"no-relative-import-paths",
	],
	rules: {
		"max-len": "off",
		"no-relative-import-paths/no-relative-import-paths": [
			"error",
			{
				prefix: "@",
				rootDir: "./src",
			},
		],
		"vuejs-accessibility/label-has-for": "off", // high false positive rate
	},
};
