module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'no-undef': 'off',
    'react/no-unescaped-entities': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
   
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'never'],
    'no-empty-function': 'off',
    'prettier/prettier': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'linebreak-style': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
