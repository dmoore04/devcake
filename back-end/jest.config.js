/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  bail: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  testPathIgnorePatterns: ['config'],
};
