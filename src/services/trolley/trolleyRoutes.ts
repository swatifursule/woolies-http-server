import { Request, Response } from 'express'

import { checkParams } from '../../middleware/checkParams'

import { trolleyTotal } from './trolleyController'
export default [
	{
		path: '/api/answers/trolleyTotal',
		method: 'post',
		handler: [
			checkParams,
			//checkAuth, - authentication and authoriztion not required
			async (req: Request, res: Response) => {
				console.log('calling trolleyTotal ', req.body)
				trolleyTotal(req.body)
					.then(result => {
						console.log('result ', result)
						res.status(200).send({ result })
					})
					.catch(error => {
						res.status(500).send(error)
					})
			}
		]
	}
]
