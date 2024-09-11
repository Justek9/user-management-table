import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type User = {
	name: string
	username: string
	email: string
	phone: number
}

interface UserState {
	users: User[]
}

const initialState: UserState = {
	users: [],
}

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
