export default {
  printWidth: 100,
  useTabs: false,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  arrowParens: 'always',

  plugins: ['@trivago/prettier-plugin-sort-imports', "prettier-plugin-tailwindcss"],

  importOrder: ['^react', '^antd', '^@?\\w', '@/(.*)', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
