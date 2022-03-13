const baseConfig = require("config/eslint-preset-lib.js");

module.exports = {
  ...baseConfig,
  overrides: [
    ...baseConfig.overrides,
    {
      ...baseConfig.overrides[0],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.lint.json"],
      },
    },
  ],
};
