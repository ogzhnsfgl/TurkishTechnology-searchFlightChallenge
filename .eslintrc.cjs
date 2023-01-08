module.exports = {
  extends: [
    'eslint-config-kentcdodds',
    'plugin:import/typescript',
    'eslint-config-kentcdodds/jest',
    'eslint-config-kentcdodds/react',
    'eslint-config-kentcdodds/jsx-a11y',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier'
  ],
  rules: {
    'no-console': 'off',
    'import/order': 'off',
    '@babel/new-cap': 'off',
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'react/jsx-filename-extension': 'off',
    'no-constant-binary-expression': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'testing-library/prefer-explicit-assert': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/sort-type-union-intersection-members': 'off'
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  },
  ignorePatterns: ['**/*.html', '**/*.css', '**/*.scss', '**/*.json', '**/*.md']
};
