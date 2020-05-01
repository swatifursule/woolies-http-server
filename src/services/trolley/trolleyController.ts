import { string } from 'yup'
import axios from 'axios'
import { get, orderBy } from 'lodash'
import {
	ERROR_CODES,
	HTTP400Error,
	HTTP404Error,
	HTTPClientError
} from '../../utils/httpErrors'

export async function trolleyTotal(body: any) {
	let total = 0
	if (body.products.length && body.specials.length) {
		let nonSpecialTotal = body.products[0].price * body.quantities[0].quantity
		let specialTotal =
			body.specials[0].quantities[0].quantity * body.specials[0].total
		total = nonSpecialTotal > specialTotal ? specialTotal : nonSpecialTotal
	}
	return total
}
