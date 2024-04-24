/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-prettier/skip-formatting',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors', // import/export 문법 검사
    'plugin:import/warnings'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    semi: ['warn', 'never'], // 세미콜론 사용을 강제
    quotes: ['warn', 'single'], // 작은따옴표 사용을 강제
    'vue/no-unused-vars': 'warn', // Vue 파일에서 사용되지 않는 변수 경고
    'import/no-unresolved': 'error', // 해결되지 않은 import 오류
    'security/detect-object-injection': 'off'
  }
}
