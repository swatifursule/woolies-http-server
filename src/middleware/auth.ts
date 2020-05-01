import { NextFunction, Response, Request } from 'express'

async function auth(req: Request, res: Response, next: NextFunction) {
	if (
		req &&
		req.headers &&
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer ')
	) {
		// authorize user
	} else {
		return next()
	}
}
export default auth
