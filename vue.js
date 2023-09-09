module.exports = {
	extends: [
		"./index",
		"@vue/eslint-config-typescript",
		"plugin:vue/vue3-essential",
	],
	parser: "vue-eslint-parser",
	parserOptions: {
		ecmaVersion: "latest",
		parser: "@typescript-eslint/parser",
		project: "./tsconfig.json",
		sourceType: "module",
	},
	rules: {
		"max-len": "off",
	},
};
