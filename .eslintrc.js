module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    '@typescript-eslint/no-var-requires': "off",
    indent: ['error', 2],
    'space-before-function-paren': 0,
    // 禁止或强制在单行代码块中使用空格
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    // 不允许多个空行
    'no-multiple-empty-lines': [
      2,
      {
        max: 1
      }
    ],
    // 禁用行尾空格
    'no-trailing-spaces': 2,
    "@typescript-eslint/no-explicit-any": ["off"]
  },
};
