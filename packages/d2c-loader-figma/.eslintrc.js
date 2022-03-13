module.exports = {
  ...require("config/eslint-preset-lib.js"),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    ecmaVersion: 2020,
    sourceType: "module",
  },
};
