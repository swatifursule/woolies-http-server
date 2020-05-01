import { string } from 'yup'

import { get } from 'lodash'
import {
	ERROR_CODES,
	HTTP400Error,
	HTTP404Error,
	HTTPClientError
} from '../../utils/httpErrors'

export async function getUserName() {
	return {
		name: 'Swati Fursule'
	}
}
