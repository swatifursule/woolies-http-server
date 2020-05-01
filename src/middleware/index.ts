import {
	handleCors,
	handleBodyRequestParsing,
	handleCompression,
	handleAuth
} from './common'

import { handleAPIDocs } from './apiDocs'


export default [
	handleCors,
	handleBodyRequestParsing,
	handleCompression,
	handleAPIDocs,
	handleAuth
]
