import * as React from 'react'

export type State = { value: string }
export type Action = { type: string; payload: string }

export const reducer = (state: State, action: Action) => {
	return {
		...state,
		value: action.payload,
	}
}
export type AppContextType = {
	state: State
	dispatch: React.Dispatch<Action>
}
const AppContext = React.createContext({} as AppContextType)
export const useAppContext = () => React.useContext(AppContext)

const initState: State = { value: '' }

export const AppContextProvider: React.FC = ({ children }) => {
	const [state, dispatch] = React.useReducer(reducer, initState)
	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	)
}
