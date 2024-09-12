import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import usersReducer from './usersReducer'
import filtersReducer from './filtersReducer'

export const store = configureStore({
	reducer: {
		users: usersReducer,
		filters: filtersReducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector
