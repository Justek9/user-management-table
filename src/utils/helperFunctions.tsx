import { User } from './typesAndHelperVariables'

export const filterTextIncludes = (el: User, position: keyof User, filters: User) => {
	const value = el[position]
	const filter = filters[position]

	if (typeof value === 'string' && typeof filter === 'string') {
		return value.toLowerCase().includes(filter.toLowerCase())
	}

	return false
}
