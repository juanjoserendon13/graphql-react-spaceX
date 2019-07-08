module.exports = {
  "parser": "babel-eslint",
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
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
  "plugins": ["react", "jsx-a11y", "import"],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "linebreak-style": [0],
    "no-restricted-syntax": [0]
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx"]
      }
    }
  }
};
