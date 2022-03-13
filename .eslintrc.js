const testFiles = ["packages/*/test/*.js", "packages/*/test/**/*.js"];
const sourceFiles = exts => [`packages/*/src/**/*.{${exts}}`];

module.exports = {
  root: true,
  env: {
    node: true,
  },
  // parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    // project: ['./tsconfig.json'],
    // tsconfigRootDir: __dirname,
  },
  plugins: ["import", "@typescript-eslint", "node", "jest", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:node/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-console": 2,
    "prettier/prettier": "error",
    "import/no-extraneous-dependencies": "error",
    "node/no-unsupported-features/es-syntax": "off",
  },
  settings: {},
  overrides: [
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
      rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "no-dupe-class-members": "off",
        "@typescript-eslint/no-dupe-class-members": "error",
        "no-undef": "off",
        "no-redeclare": "off",
      },
    },
    {
      files: sourceFiles("js,ts,cjs,mjs"),
      rules: {
        "guard-for-in": "error",
        "import/extensions": ["error", { json: "always", cjs: "always" }],
      },
      globals: { PACKAGE_JSON: "readonly" },
    },
    {
      files: [...testFiles, "test/**/*.js"],
      env: {
        jest: true,
      },
      extends: "plugin:jest/recommended",
      rules: {
        "jest/expect-expect": "off",
        "jest/no-identical-title": "off",
        "jest/no-standalone-expect": "off",
        "jest/no-test-callback": "off",
        "jest/valid-describe": "off",
        "import/extensions": ["error", "always"],
        "import/no-extraneous-dependencies": "off",
        "no-restricted-imports": ["error", { patterns: ["**/src/**"] }],
      },
    },
  ],
  ignorePatterns: ["node_modules", ".turbo", "dist"],
};
