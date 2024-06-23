module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended-type-checked",
		"prettier",
	],
	ignorePatterns: [
		"dist/",
		"node_modules/",
		"**/*.d.ts",
		"**/*.js",
	],
	overrides: [],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		project: "./tsconfig.json",
		sourceType: "module",
	},
	plugins: [
		"@typescript-eslint",
	],
	rules: {
		"default-case": "error",
		"default-case-last": "error",
		"eqeqeq": [
			"error",
			"always",
		],
		"no-duplicate-imports": "error",
		"no-multiple-empty-lines": [
			"error",
			{
				max: 1,
			},
		],
		"object-shorthand": [
			"error",
			"never",
		],
		"prefer-arrow-callback": "error",
		"prefer-const": "error",
		"sort-keys": [
			"error",
			"asc",
			{
				caseSensitive: false,
				natural: true,
			},
		],
		"@typescript-eslint/consistent-type-imports": [
			"error",
			{
				prefer: "no-type-imports",
			},
		],
		"@typescript-eslint/explicit-function-return-type": "error",
		"@typescript-eslint/explicit-member-accessibility": "error",
		"@typescript-eslint/no-confusing-void-expression": "error",
		"@typescript-eslint/no-empty-function": "off",
		"@typescript-eslint/no-meaningless-void-operator": "error",
		"@typescript-eslint/no-non-null-assertion": "error",
		"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
		"@typescript-eslint/prefer-literal-enum-member": "error",
		"@typescript-eslint/prefer-regexp-exec": "error",
	},
};
