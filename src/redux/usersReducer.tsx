import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../utils/typesAndHelperVariables'
import { filterTextIncludes } from '../utils/helperFunctions'
import { createSelector } from 'reselect'
import { selectFilters } from './filtersReducer'

interface UserState {
	users: User[]
}

const initialState: UserState = {
	users: [],
}

const selectUsers = (state: { users: UserState }) => state.users.users

export const getFilteredUsers = createSelector([selectUsers, selectFilters], (users, filters) => {
	return users.filter((user: User) => {
		return (
			filterTextIncludes(user, 'name', filters) &&
			filterTextIncludes(user, 'username', filters) &&
			filterTextIncludes(user, 'email', filters) &&
			filterTextIncludes(user, 'phone', filters)
		)
	})
})

export const UsersSlice = createSlice({
	name: 'User',
	initialState,
	reducers: {
		addUsers: (state, action: PayloadAction<{ users: User[] }>) => {
			state.users = [...action.payload.users]
		},
	},
})

export default UsersSlice.reducer
export const { addUsers } = UsersSlice.actions
