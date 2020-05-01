const BuildUtils = require('that-build-library').BuildUtils

module.exports = Promise.resolve()
	.then(async () => {
		await BuildUtils.echo('Prettiering')
		// prettier-ignore
		await BuildUtils.exec('prettier', ['--write', 'src/**/*.ts'])

		await BuildUtils.echo('Linting')
		// prettier-ignore
		await BuildUtils.exec('eslint', [
			'--config', 'scripts/config/eslint.config.js',
			'--ignore-pattern', 'src/swaggerui/**/*',
			'--ignore-pattern', '*.test.ts',
			'--fix',
			'src/**/*.ts'
		])
	})
	.catch(e => {
		console.error('An error occurred', e)
		process.exit(1)
	})
