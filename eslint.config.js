// eslint.config.js
import { ESLint } from 'eslint';

export default [
  {
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended'
    ],
    plugins: ['react'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2021, // ES2021 지원
      sourceType: 'module' // ECMAScript 모듈 사용
    }
  }
];
