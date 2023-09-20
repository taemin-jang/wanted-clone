'use client'
import { createContext, useContext, useReducer, Dispatch } from 'react'

interface Callback {
	confirmCallback: () => void
	cancelCallback: () => void
}

interface State {
	value: boolean
	callback?: Callback
}

interface Action {
	type: string
	payload?: Callback
}

type DispatchType = Dispatch<Action>

const ModalStateContext = createContext<State | null>(null)
const ModalDispatchContext = createContext<DispatchType | null>(null)

// State Custom Hook
export const useModalStateContext = () => {
	const state = useContext(ModalStateContext)
	if (!state) throw new Error('Cannot find useModalStateContext')
	return state
}

// Dispatch Custom Hook
export const useModalDispatchContext = () => {
	const Dispatch = useContext(ModalDispatchContext)
	if (!Dispatch) throw new Error('Cannot find useModalDispatchContext')
	return Dispatch
}

const reducer = (state: State, action: Action) => {
	switch (action.type) {
		case 'open':
			return { value: !state.value }
		case 'close':
			return { value: !state.value }
		default:
			return state
	}
}

const ModelProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, {
		value: false,
	})

	return (
		<ModalStateContext.Provider value={state}>
			<ModalDispatchContext.Provider value={dispatch}>
				{children}
			</ModalDispatchContext.Provider>
		</ModalStateContext.Provider>
	)
}

export default ModelProvider
