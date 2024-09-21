import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu({
  react: true,
  typescript: true,
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
  }),
})
