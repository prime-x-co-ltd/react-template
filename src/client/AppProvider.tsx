import * as React from 'react'
import { getRecords } from '../backend/api'

export type State = {
	[key: string]: string
	compayName: string
	projectName: string
	projectCode: string
	wordForSale: string
	imgForSale: string
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
	compayName: '',
	projectName: '',
	projectCode: '',
	wordForSale: '',
	imgForSale: '',
}

export const AppContextProvider: React.FC = ({ children }) => {
	const [state, dispatch] = React.useReducer(reducer, initState)

	React.useEffect(() => {
		const fetchData = async () => {
			const resp = await getRecords()
			console.log(resp)
			return
		}
		fetchData()
	}, [])

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	)
}
