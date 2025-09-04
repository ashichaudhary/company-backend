export default {
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  testEnvironment: "node",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js"],   // ✅ src ke andar sab JS files cover karo
  coverageDirectory: "coverage"
};

