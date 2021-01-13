import * as React from 'react'

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
			const resp = await fetch('http://localhost:3000/api/v1/records')
			console.log(resp.json())
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
