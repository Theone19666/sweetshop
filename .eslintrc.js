module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:vue/vue3-essential', 'airbnb-base'],
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        indent: ['error', 4],
        'no-console': ['error'],
        semi: ['error', 'always'],
    },
};
