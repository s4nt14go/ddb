module.exports = {
  transform: {
    '^.+\\.ts?$': ['ts-jest', { tsconfig: './configs/tsconfig.esm.json' }],
  },
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '\\.spec\\.(ts|tsx)$',
};
