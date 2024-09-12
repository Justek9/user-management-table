import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FiltersState {
	filters: {
		name: string
		username: string
		phone: string
		email: string
	}
}

const initialState: FiltersState = {
	filters: {
		name: '',
		username: '',
		phone: '',
		email: '',
	},
}

export const FiltersSlice = createSlice({
	name: 'Filter',
	initialState,
	reducers: {
		addFilters: (state, action: PayloadAction<FiltersState['filters']>) => {
			state.filters = { ...action.payload }
		},
	},
})

export default FiltersSlice.reducer
export const { addFilters } = FiltersSlice.actions
