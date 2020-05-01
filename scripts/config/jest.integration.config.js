module.exports = {
	preset: 'ts-jest',
	moduleFileExtensions: ['ts', 'js'],
	rootDir: '../../e2e',
	moduleNameMapper: {
		'@/src/(.*)': '<rootDir>/../src/graphqlapi/$1',
	},
	transformIgnorePatterns: ['node_modules/(?!(jest-))'],
	globalSetup: '<rootDir>/setup.hook.js',
	globalTeardown: '<rootDir>/teardown.hook.js',
	collectCoverage: false
}
