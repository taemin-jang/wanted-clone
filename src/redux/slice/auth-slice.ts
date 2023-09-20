import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
	isAuth: boolean
	userName: string
	uid: string
}

export interface InitialState {
	value: AuthState
}

const initialState: InitialState = {
	value: {
		isAuth: false,
		userName: '',
		uid: '',
	},
}

export const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logIn: (_, action: PayloadAction<string>) => {
			return {
				value: {
					isAuth: true,
					userName: action.payload,
					uid: 'uid',
				},
			}
		},
		logOut: () => {
			return initialState
		},
	},
})

export const { logIn, logOut } = auth.actions
export default auth.reducer
