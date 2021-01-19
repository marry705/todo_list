module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-hooks',
    '@typescript-eslint',
  ],
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'no-bitwise': ['error', { allow: ['~'] }],
    'no-use-before-define': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': [2, { commonjs: true, caseSensitive: true }],
    'import/no-extraneous-dependencies': ['error', { peerDependencies: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
