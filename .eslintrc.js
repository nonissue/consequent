// .eslintrc.js
// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser", // the TypeScript parser we installed earlier
  parserOptions: {
    ecmaFeatures: { jsx: true }, // Allows for the parsing of JSX
  },
  plugins: ["@typescript-eslint", "import", "react"],
  extends: [
    "eslint:recommended", // eslint default rules
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/eslint-recommended", // eslint TypeScript rules (github.com/typescript-eslint/typescript-eslint)
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended", // eslint react rules (github.com/yannickcr/eslint-plugin-react)
    "plugin:jsx-a11y/recommended", // accessibility plugin
    "plugin:@next/next/recommended",
  ],
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: ".",
      },
    },
    react: {
      version: "detect",
    },
    files: ["**/*.ts", "**/*.tsx"],
  },
};
