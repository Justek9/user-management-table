export type User = {
	name: string
	username: string
	email: string
	phone: string
	[key: string]: any
}

export const tableHead = {
	name: 'Name',
	username: 'Username',
	email: 'Email',
	phone: 'Phone',
}

export const loadingSstates = {
	loading: 'loading',
	error: 'error',
	success: 'success',
}
