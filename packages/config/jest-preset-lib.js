module.exports = {
  ...require("./jest-preset-base"),
  testEnvironment: "node",
  setupFilesAfterEnv: [],
  transform: {
    "^.+.[t|j]sx?$": "esbuild-jest",
  },
  transformIgnorePatterns: ["/node_modules/"],
  collectCoverageFrom: ["**/src/**/*.{js,ts}"],
  coveragePathIgnorePatterns: ["/node_modules/"],
  moduleFileExtensions: ["js", "ts", "json"],
};
