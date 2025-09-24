// eslint.config.js
import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

// new plugins
import prettier from 'eslint-plugin-prettier'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'

export default tseslint.config(
  { ignores: ['node_modules', 'dist', '.next'] },

  {
    // base + TS rules
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },

    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },

    rules: {
      // ---- React / Refresh ----
      ...reactHooks.configs.recommended.rules,
      // keep only one of these; choose "off" or "warn"
      'react-refresh/only-export-components': 'off',

      // ---- Formatting via Prettier (acts as ESLint rule) ----
      'prettier/prettier': 'error',

      // ---- Whitespace / neatness ----
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      // logical blank lines for readability
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        { blankLine: 'always', prev: 'directive', next: '*' },
        { blankLine: 'always', prev: 'import', next: ['const', 'let', 'var', 'export', 'function', 'class'] },
        { blankLine: 'always', prev: ['function', 'class'], next: '*' },
      ],

      // ---- Imports hygiene ----
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],

      // ---- General cleanliness / safety ----
      'prefer-const': ['error', { destructuring: 'all' }],
      'no-var': 'error',
      eqeqeq: ['error', 'smart'],
      curly: ['error', 'all'],

      // TS-specific polish (keeps code tidy without being noisy)
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
      ],
      '@typescript-eslint/no-unused-vars': 'off', // handled by unused-imports
    },
  },
)
