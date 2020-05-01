export abstract class HTTPClientError extends Error {
	readonly statusCode!: number
	readonly statusText!: string

	constructor(message: object | string) {
		if (message instanceof Object) {
			super(JSON.stringify(message))
			this.statusText = JSON.stringify(message)
		} else {
			super(message)
			this.statusText = message
		}

		Error.captureStackTrace(this, this.constructor)
	}
}

export class HTTP400Error extends HTTPClientError {
	readonly statusCode = 400
	//readonly statusText = "Bad Request";

	constructor(message: string | object = 'Bad Request') {
		//this.statusText(message)
		super(message)
	}
}

export class HTTP401Error extends HTTPClientError {
	readonly statusCode = 401

	constructor(message: string | object = 'Unauthorized') {
		super(message)
	}
}

export class HTTP403Error extends HTTPClientError {
	readonly statusCode = 403

	constructor(message: string | object = 'Forbidden') {
		super(message)
	}
}

export class HTTP404Error extends HTTPClientError {
	readonly statusCode = 404

	constructor(message: string | object = 'Not found') {
		super(message)
	}
}

export const ERROR_CODES = {
	client: {
		invalidParams: 'client:invalid-params',
		notFound: 'client:document-not-found',
		existingDocumentFound: 'client:existing-document-found',
		codeMismatch: 'client:verification-code-mismatch'
	},
	server: {
		fieldNotFound: 'server:field-not-found',
		codeExpired: 'server:verification-code-expired',
		codeExpiredEmailTriggered:
			'server:verification-code-expired-and-another-email-triggered',
		codeMatchedButFailedToUpdateFirestoreEmailAddress:
			'server:code-matched-but-failing-to-update-users-team-email-address',
		createdAuthAccountButFailedToSaveEmailAddress:
			'server:created-auth-account-but-failed-to-save-email-address',
		createdAuthAccountButFailedToSaveUser:
			'server:created-auth-account-but-failed-to-save-user',
		failedToCreateUserTeam: 'server:failure-to-create-user-team-relation',
		failedToCreateTeamMember: 'server:failure-to-create-team-member',
		failedToUpdateInvitation: 'server:failure-to-update-invitation',
		failedToWrite: 'server:failure-when-writing',
		failedToRead: 'server:failure-when-reading',
		failedToCreateAccount: 'server:failed-to-create-auth-account'
	}
}
