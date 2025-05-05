// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';


export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
    tseslint.configs.stylisticTypeChecked,
  {
    name: 'custom-rules',
    rules: {
      'no-console': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'warn',
    },
  },
  {
    name: 'prettier',
    ...prettier,
  }
);
