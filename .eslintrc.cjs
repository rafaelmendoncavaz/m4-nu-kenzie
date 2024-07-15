module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { 
        allowConstantExport: true 
      },
    ],
    "quotes": [
      "error", 
      "double"
    ],
    "padding-line-between-statements": [
      "error", 
      {
        blankLine: "always", 
        prev: "*", 
        next: "block"
      },
      {
        blankLine: "always", 
        prev: "*", 
        next: "block-like"
      },
      {
        blankLine: "always", 
        prev: "*", 
        next: "return"
      },
    ],
    "keyword-spacing": [
      "error", 
      {
        before: true,
        after: true
      }
    ],
    "space-infix-ops": "error",
    "semi": [
      "error", 
      "always"
    ],
    "array-element-newline": [
      "error", 
      {
        multiline: true,
        minItems: 3
      }
    ],
    "object-curly-newline": [
      "error",
      {
        multiline: true,
        consistent: true
      }
    ],
    "object-property-newline": [
      "error",
      {
        allowAllPropertiesOnSameLine: false
      }
    ]
  },
}
