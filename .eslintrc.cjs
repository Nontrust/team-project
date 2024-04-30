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
    'security/detect-object-injection': 'off'
    // 'import/no-unresolved': [2, { caseSensitive: false }]
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './'],
          ['~', './'] // baseUrl과 일치하는 경로 // baseUrl과 일치하는 경로
        ],
        extensions: ['.vue', '.js', '.json']
      }
    }
  }
}
