import * as React from 'react'
import { Theme, makeStyles } from '@material-ui/core/styles'
/**Context */
import { useAppContext } from '../AppProvider'
import { useAPIContext } from '../APIProvider'

import { data } from '../sample_data'

import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		margin: theme.spacing(1),
	},
	pjCode: {
		width: '25ch',
	},
	pjName: {
		width: '40ch',
	},
	companyName: {
		width: '60ch',
	},
	campaignName: {
		width: '67ch',
	},
}))

export const SelectTag: React.FC = () => {
	const classes = useStyles()
	const { state, dispatch } = useAppContext()

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({ type: event.target.name, payload: event.target.value })
	}

	return (
		<>
			<TextField
				select
				className={classes.root + ' ' + classes.pjCode}
				name="tagWord"
				variant="outlined"
				label="文言軸"
				value={state.tagWord}
				onChange={handleChange}>
				{data.tagWord.map((item) => (
					<MenuItem key={item.value} value={item.value}>
						{item.label}
					</MenuItem>
				))}
			</TextField>
			<TextField
				select
				className={classes.root + ' ' + classes.pjCode}
				name="tagImage"
				variant="outlined"
				label="画像軸"
				value={state.tagImage}
				onChange={handleChange}>
				{data.tagImage.map((item) => (
					<MenuItem key={item.value} value={item.value}>
						{item.label}
					</MenuItem>
				))}
			</TextField>
		</>
	)
}

export const SelectProjectCode: React.FC = () => {
	const classes = useStyles()
	const { state, dispatch } = useAppContext()
	const { respAPI } = useAPIContext()

	const handleChangeProject = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		dispatch({ type: 'pjCode', payload: event.target.value })
		const currentValue = respAPI.find(
			(item) => item.pjCode === event.target.value
		)
		if (currentValue) {
			dispatch({ type: 'pjName', payload: currentValue.pjName })
			dispatch({ type: 'companyName', payload: currentValue.companyName })
		}
	}
	const handleChangeCampaign = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		dispatch({ type: event.target.name, payload: event.target.value })
	}

	return (
		<>
			<TextField
				select
				className={classes.root + ' ' + classes.pjCode}
				id="pjCode"
				variant="outlined"
				label="プロジェクトコード"
				value={state.pjCode}
				onChange={handleChangeProject}>
				{respAPI.map((item) => (
					<MenuItem key={item.pjCode} value={item.pjCode}>
						{item.pjCode}
					</MenuItem>
				))}
			</TextField>
			<TextField
				disabled
				className={classes.root + ' ' + classes.pjName}
				id="pjName"
				variant="outlined"
				label="プロジェクトネーム"
				value={
					respAPI.find((item) => item.pjCode === state.pjCode)?.pjName
				}
			/>
			<TextField
				disabled
				className={classes.root + ' ' + classes.companyName}
				id="companyName"
				variant="outlined"
				label="企業名"
				value={
					respAPI.find((item) => item.pjCode === state.pjCode)
						?.companyName
				}
			/>
			<div>
				<TextField
					required
					className={classes.root + ' ' + classes.campaignName}
					name="campaignName"
					variant="outlined"
					label="キャンペーン名"
					value={state.campaignName}
					onChange={handleChangeCampaign}
					autoComplete="off"
				/>
			</div>
		</>
	)
}
