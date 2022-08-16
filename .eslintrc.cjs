module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    // 'plugin:vue/vue3-essential',
    // 'standard-with-typescript',
    'eslint-config-standard-with-typescript',
    'prettier'
  ],
  parser: "@typescript-eslint/parser",
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project:'./tsconfig.json'
  },
  plugins: [
    // 'vue',
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    'prettier/prettier':'error'
  }
}
