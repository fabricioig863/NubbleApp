module.exports = {
  preset: 'react-native',
  collectCoverageFrom: [
    'src/{components,utils,hooks,domain}/**/*.{js,jsx,ts,tsx}',
  ],
  coveragePathIgnorePatterns: ['/node_modules/', 'index'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|@react-navigation)/)',
  ],
  setupFiles: [
    '<rootDir>/__mocks__/react-native-mmkv.ts',
    '<rootDir>/src/test/jestSetup.ts',
  ],
  moduleDirectories: ['node_modules', './src/test'],
  modulePathIgnorePatterns: ['.*/mockedData/.*'],
};
