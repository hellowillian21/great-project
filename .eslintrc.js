module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    indent: 0,
    '@typescript-eslint/indent': [
      'error',
      2
    ],
    '@typescript-eslint/type-annotation-spacing': 1,
    'no-use-before-define': 0,
    'react/prop-types': 0,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-closing-bracket-location': 1, // 在JSX中验证右括号位置
    'jsx-quotes': [1, 'prefer-single'], // 强制在JSX属性（jsx-quotes）中一致使用单引号
    'react/jsx-indent': [1, 2],
    'react/jsx-indent-props': [1, 2], // 验证JSX中的props缩进
    'react/jsx-first-prop-new-line': [
      1,
      'multiline'
    ],
    'react/jsx-max-props-per-line': [
      1,
      {
        maximum: 1,
        when: 'always'
      }
    ]
  },
  settings: {
    react: {
      version: '999.999.999'
    }
  }
}
