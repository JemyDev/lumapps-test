import { jest as jestConfig } from 'kcd-scripts/config';

export default Object.assign(jestConfig, {
  globalSetup: '<rootDir>/src/setupJest',
  modulePaths: ['<rootDir>/src/'],

  transform: {
    ...jestConfig.transform,
    '\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },

  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
});
