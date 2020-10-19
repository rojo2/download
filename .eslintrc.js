module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'space-before-function-paren': ['off'],
    'operator-linebreak': ['error', 'before']
  }
}
