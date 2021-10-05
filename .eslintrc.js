// https://github.com/lightsound/nexst-tailwind/blob/main/.eslintrc.js
// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "import", "react", "tailwindcss"],
  extends: [
    "eslint:recommended",
    "plugin:@next/next/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/typescript",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:tailwindcss/recommended",
  ],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      { prefer: "type-imports" },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "import/newline-after-import": "error",
    "import/no-default-export": 1,
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/display-name": "error",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
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
  overrides: [
    {
      files: ["src/pages/**/*.tsx", "src/pages/api/**/*.ts"],
      rules: {
        "import/no-default-export": "off",
        "@typescript-eslint/naming-convention": [
          "error",
          { selector: ["typeAlias", "typeParameter"], format: ["PascalCase"] },
          {
            selector: ["classProperty", "typeProperty", "method"],
            format: ["camelCase"],
          },
          {
            selector: "variable",
            types: ["boolean"],
            format: ["PascalCase"],
            prefix: ["is", "has", "should"],
          },
        ],
      },
    },
    {
      files: ["src/type/**/*.d.ts"],
      rules: {
        "@typescript-eslint/naming-convention": [
          "error",
          { selector: ["typeAlias", "typeParameter"], format: ["PascalCase"] },
          { selector: ["classProperty", "method"], format: ["camelCase"] },
          {
            selector: "variable",
            types: ["boolean"],
            format: ["PascalCase"],
            prefix: ["is", "has", "should"],
          },
        ],
      },
    },
  ],
};
