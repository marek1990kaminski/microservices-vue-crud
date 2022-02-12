module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': ['warn', 132],
    'object-curly-spacing': ['off', 'always'],
    'space-in-brackets': ['off', 'always'],
    'quotes': ['error', 'single'],
    'comma-dangle': ['off', 'always'],
    'no-alert': ['off', 'always'],
  },
};
