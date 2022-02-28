module.exports = {
    preset: 'ts-jest',
    transform: {
      '^.+\\.(ts|tsx)?$': 'ts-jest',
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    testEnvironment: "jsdom",
    // moduleNameMapper: {
    //   '\\.(css|less)$': '<rootDir>styleMock.js',
    // },
};