import { Request, Response, NextFunction } from 'express'
import { HTTP400Error } from '../utils/httpErrors'

export const checkParams = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (!req.body) {
		throw new HTTP400Error('Missing body ')
	}
	next()
}
