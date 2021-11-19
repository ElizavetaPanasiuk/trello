module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: "module"
  },
  rules: {
    "no-var": "error",
    "semi": "error",
    "no-multi-spaces": "error",
    "space-in-parens": "error",
    "no-multiple-empty-lines": "error",
    "prefer-const": "error",
    "no-use-before-define": "error"
  }
};