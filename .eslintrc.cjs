module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  extends: ['eslint:recommended', 'plugin:ft-flow/recommended', 'prettier'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: 'hermes-eslint',
  plugins: ['react-refresh', 'ft-flow'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      {allowConstantExport: true},
    ],
    // Not needed, since all=true set in .flowconfig
    'ft-flow/no-types-missing-file-annotation': 'off',
    // babel and es6 allow block-scoped functions
    'no-inner-declarations': 'off',
    // These rules are not required with hermes-eslint
    'ft-flow/define-flow-type': 'off',
    'ft-flow/use-flow-type': 'off',
    // Flow handles all of these natively, so we don't want to use them
    'no-undef': 'off',
    'react/jsx-no-undef': 'off',
    'constructor-super': 'off',
    'no-dupe-args': 'off',
    'no-obj-calls': 'off',
    'no-unreachable': 'off',
  },
};
