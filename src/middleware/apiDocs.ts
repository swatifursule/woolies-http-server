import { Router } from 'express'
import swaggerDocument from '../config/swagger.json'
import swaggerUi from 'swagger-ui-express'

export const handleAPIDocs = (router: Router) => {
	router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
}
