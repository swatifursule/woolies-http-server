import { Request, Response } from 'express'

import { checkParams } from '../../middleware/checkParams'

import {sort } from './sortController'
export default [
	{
		path: '/api/answers/sort',
		method: 'get',
		handler: [
			//checkParams,
			//checkAuth, - authentication and authoriztion not required
			async (req: Request, res: Response) => {
				sort(req.query.sortOption as string)
					.then(result => {
						res.status(200).send(result)
					})
					.catch(error => {
						res.status(error.statusCode).send(error)
					})
			}
		]
	}
]

