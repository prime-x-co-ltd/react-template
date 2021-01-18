import * as React from 'react'

export type State = {
	[key: string]: string
	pjCode: string
	pjName: string
	compayName: string
	campaignName: string
	tagWord: string
	tagImage: string
	uploadUrl: string
}
export type Action = { type: string; payload: string }

export const reducer = (state: State, action: Action) => {
	return {
		...state,
		[action.type]: action.payload,
	}
}
export type AppContextType = {
	state: State
	dispatch: React.Dispatch<Action>
}
const AppContext = React.createContext({} as AppContextType)
export const useAppContext = () => React.useContext(AppContext)

const initState: State = {
	pjCode: '',
	pjName: '',
	compayName: '',
	campaignName: '',
	tagWord: '',
	tagImage: '',
	uploadUrl: '',
}

/**Data-Cleansing */

export const AppContextProvider: React.FC = ({ children }) => {
	const [state, dispatch] = React.useReducer(reducer, initState)

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	)
}
