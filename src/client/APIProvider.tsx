import * as React from 'react'
import { Record } from '@kintone/rest-api-client/lib/client/types'
import axios from 'axios'

type State = {
	pjCode: string
	pjName: string
	companyName: string
}[]

export type APIContextType = { respAPI: State }
export const APIContext = React.createContext({} as APIContextType)
export const useAPIContext = () => React.useContext(APIContext)

const initState: State = [
	{
		pjCode: '',
		pjName: '',
		companyName: '',
	},
]

export const APIContextProvider: React.FC = ({ children }) => {
	const [respAPI, setRespAPI] = React.useState(initState)

	React.useEffect(() => {
		const fetchData = async () => {
			const resp = await axios.get(
				'https://localhost:3000/api/v1/records/1257'
			)
			const records: Record[] = resp.data.records

			const pjCodes = records.map(
				(record) => record['プロジェクトコード'].value as string
			)
			const pjNames = records.map(
				(record) => record['プロジェクトネーム'].value as string
			)
			const companyNames = records.map(
				(record) => record['企業名'].value as string
			)

			setRespAPI(
				pjCodes.map((_, index) => {
					return {
						pjCode: pjCodes[index],
						pjName: pjNames[index],
						companyName: companyNames[index],
					}
				})
			)
		}
		fetchData()
	}, [])

	return (
		<APIContext.Provider value={{ respAPI }}>
			{children}
		</APIContext.Provider>
	)
}
