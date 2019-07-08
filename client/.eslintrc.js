module.exports = {
  "parser": "babel-eslint",
  "plugins": ["react", "jsx-a11y", "import"],
  extends: [
    'airbnb',
  ],
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: false,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "linebreak-style": [0],
    "no-restricted-syntax": [0],
    camelcase:[0]
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx"]
      }
    }
  }
};
