import { KintoneRestAPIClient } from '@kintone/rest-api-client'
// import * as dotenv from 'dotenv'
// dotenv.config()

const APPID = 1257

export const getRecords = async () => {
	const client = new KintoneRestAPIClient({
		baseUrl: process.env.KINTONEURL,
		auth: {
			username: process.env.KINTONEUSER,
			password: process.env.KINTONEPSWD,
		},
	})
	console.log(process.env)
	await client.record
		.getRecords({ app: APPID })
		.then((resp) => Promise.resolve(resp))
		.catch((err) => Promise.reject(err))
}
