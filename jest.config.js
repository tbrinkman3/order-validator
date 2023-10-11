/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  transform: {
    "^.+\\.(ts)$": "ts-jest",
  },
  coverageDirectory: "./coverage/",
  collectCoverageFrom: ["src/*.ts"],
  collectCoverage: true,
  testMatch: ["<rootDir>/__test__/**/*spec.ts"],
};
