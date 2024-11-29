# eslint-config-rth

The ESLint configurations used by Retinbox Software.

## Installation

```bash
npm install --save-dev @eslint/eslintrc eslint-config-rth
```

## Usage

Create an `eslint.config.js` file in your project root with the following content:

```javascript
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	allConfig: js.configs.all,
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
});

export default [...compat.extends("rth")];
```
