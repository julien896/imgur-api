/* eslint-env node */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  ignorePatterns: [".eslintrc.cjs", "vite.config.ts"],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "require-await": "error",
    "@typescript-eslint/no-unused-vars": "warn",
    "indent": ["error", 2],
    "eqeqeq": "error",
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/restrict-template-expressions": ["off"],
    "import/named": ["off"],
    "react-hooks/exhaustive-deps": ["off"],
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
}
