const { defaults } = require("jest-config");

module.exports = {
  bail: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, "js", "jsx"],
  roots: ["src"],
  testMatch: ["<rootDir>/src/**/?(*.)test.{js,jsx}"],
  verbose: true
};
