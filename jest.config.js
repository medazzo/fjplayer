/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  name: 'fjplayer',
  verbose: true,
  rootDir: '.',
  clearMocks: true,
  cacheDirectory: 'cache',
  coverageDirectory: 'coverage',
  preset: 'jest-puppeteer',
  setupFilesAfterEnv: ['./jest.setup.js'],
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/cache/**',
    '!**/demo/**',
    '!**/dist/**',
    '!**/docs/**',
    '!**/test/**',
    '!**/videoscripts-master/**',
    '!**/vendor/**',
    '!jest.config.js',
    '!webpack-prod.config.js',
    '!webpack.config.js',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  modulePaths: [
    '<rootDir>',
  ],
  transform: {
    '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
  },
  globals: {
    window: {},
  },
  moduleDirectories: [
    'node_modules',
    'src',
  ],

};
