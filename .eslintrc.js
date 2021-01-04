module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    '@pacote/eslint-config-jest',
    'plugin:cypress/recommended',
    'plugin:mocha/recommended',
    'prettier/@typescript-eslint',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
    'cypress/globals': true,
    es6: true,
  },
  plugins: ['@typescript-eslint', 'prettier', 'react', 'react-hooks', 'jsx-a11y', 'jest', 'cypress', 'mocha'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
    'react/require-default-props': 'off',
    'react/display-name': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/anchor-is-valid': 'off', //Doesn't play well with Next <Link> usage
    'jsx-a11y/img-redundant-alt': 'off',
    'jsx-a11y/no-redundant-roles': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/react-in-jsx-scope': 'off', // React is always in scope with Next
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        argsIgnorePattern: '^_',
      },
    ],
    'no-console': [
      2,
      {
        allow: ['warn', 'error'],
      },
    ],
    'jest/no-conditional-expect': 'warn',
    'jest/no-disabled-tests': 'error',
    'jest/consistent-test-it': ['error'],
    'jest/expect-expect': [
      'error',
      {
        assertFunctionNames: ['cy.*', 'expect'],
      },
    ],
    'jest/no-try-expect': 'warn',
    'mocha/no-mocha-arrows': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'variable',
        modifiers: ['const'],
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'property',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-shadow': [
      'error',
      {
        ignoreTypeValueShadow: true,
      },
    ],
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true,
      },
    ],
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
      },
    ],
    '@typescript-eslint/no-useless-constructor': ['error'],
  },
  overrides: [
    // Override some TypeScript rules just for .js files
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off', //
      },
    },
    {
      files: ['**/*.test.ts*', '**/*.spec.ts*'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
};
