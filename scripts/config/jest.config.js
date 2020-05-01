module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	rootDir: '../../src',
	moduleNameMapper: {
		'@/src/(.*)': '<rootDir>/src/$1'
	},
	collectCoverage: false,
	collectCoverageFrom: ['**/*.ts'],
	coverageDirectory: '../coverage'
	// coverageThreshold: {
	// 	global: {
	// 		branches: 80,
	// 		functions: 80,
	// 		lines: 80,
	//      statements: 80
	// 	}
	// }
}
