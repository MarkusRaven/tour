module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint",
  ],
  "rules": {
    'import/prefer-default-export': 'off',
    'no-case-declarations': 'off',
    allowShortCircuit: 0,
    'linebreak-style': 0,
    'max-len': [
      'error',
      {
        code: 120
      }
    ],
    indent: ['error', 2, { SwitchCase: 1 }],
    'comma-dangle': ['off'],
    'import/extensions': 0,
    'no-nested-ternary': ['off'],
    'no-unused-expressions': ['off'],
    'object-curly-spacing': ['error', 'always'],
    'padded-blocks': ['off'],
  }
}
