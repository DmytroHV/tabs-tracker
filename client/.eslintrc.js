module.exports = {
  root: true,

  env: {
    node: true,
    browser: true
  },

  extends: ['plugin:vue/recommended', '@vue/prettier', '@vue/typescript'],

  rules: {
    'vue/no-unused-vars': 'error',
    'prettier/prettier': 'error',
    'newline-before-return': 'warn',
    'space-in-parens': 0,
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'state', // for Vuex state
          'e' // for e.returnvalue
        ]
      }
    ],
    'no-unused-vars': [
      'off',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        vars: 'all'
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },

  parserOptions: {
    parser: 'typescript-eslint-parser'
  }
};
