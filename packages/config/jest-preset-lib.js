module.exports = {
  ...require("./jest-preset-base"),
  testEnvironment: "node",
  setupFilesAfterEnv: [],
  transform: {
    "^.+\\.tsx?$": ["esbuild-jest"],
  },
  transformIgnorePatterns: ["/node_modules/", "/test/*"],
  collectCoverageFrom: ["**/src/**/*.{js,ts}"],
  coveragePathIgnorePatterns: ["/node_modules/"],
  moduleFileExtension: ["js", "ts", "json"],
};
