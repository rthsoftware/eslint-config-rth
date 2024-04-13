module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended-type-checked",
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
		"arrow-body-style": [
			"error",
			"always",
		],
		"arrow-parens": [
			"error",
			"always",
		],
		"comma-dangle": [
			"error",
			"always-multiline",
		],
		"curly": [
			"error",
			"all",
		],
		"default-case": "error",
		"default-case-last": "error",
		"eol-last": [
			"error",
			"always",
		],
		"eqeqeq": [
			"error",
			"always",
		],
		"indent": [
			"error",
			"tab",
			{
				SwitchCase: 1,
			},
		],
		"linebreak-style": [
			"error",
			"unix",
		],
		"max-len": "error",
		"no-duplicate-imports": "error",
		"no-mixed-operators": "error",
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
		"quotes": [
			"error",
			"double",
		],
		"semi": [
			"error",
			"always",
		],
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
