import { Request, Response } from 'express'

import { checkParams } from '../../middleware/checkParams'

import { getUserName } from './userController'
export default [
	{
		path: '/api/answers/user',
		method: 'get',
		handler: [
			//checkParams,
			//checkAuth, - authentication and authoriztion not required
			async (req: Request, res: Response) => {
				getUserName()
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
