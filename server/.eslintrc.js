module.exports = {
  root: true,

  env: {
    node: true,
    commonjs: true,
    es6: true
  },

  extends: ['airbnb-base', 'prettier'],

  // plugins: ['prettier'],

  rules: {
    // 'prettier/prettier': 'error',
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

  parser: 'babel-eslint',

  parserOptions: {
    sosurceType: 'module',
    ecmaFeatures: {
      modules: true
    }
  }
};
