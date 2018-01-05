module.exports = {
    root: true,
    //"parser": "babel-eslint",
    parserOptions: {
        sourceType: 'module',
        "ecmaVersion": 8,
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/recommended",
        "standard"
    ],
    "env": {
        "es6": true,
        "node": true,
        "browser": true,
    },
    // add your custom rules here
    'rules': {
        "indent": ["error", 4],
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    }
}