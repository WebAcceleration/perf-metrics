module.exports = {
  name: '@webacceleration/perf-metrics',
  displayName: '@webacceleration/perf-metrics',
  testMatch: ['<rootDir>/(src|__tests__)/**/(*.)spec.ts'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '^.+\\.ts$': '<rootDir>/node_modules/ts-jest'
  },
  coverageDirectory: '<rootDir>/__tests__/coverage',
  collectCoverageFrom: ['src/**/*.{ts}', '!**/node_modules/**'],
  verbose: true,
  collectCoverage: false,
  coverageReporters: ['json', 'html']
};
