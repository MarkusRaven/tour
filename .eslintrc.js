module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname, 
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    // 'plugin:prettier/recommended',
    "eslint:recommended",
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
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
    'no-unused-vars': ['off'],
    'object-curly-spacing': ['error', 'always'],
    'padded-blocks': ['off'],
  },
};
