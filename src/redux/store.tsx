import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import usersReducer from './usersReducer'

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch

export const useAppSelctor: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector
