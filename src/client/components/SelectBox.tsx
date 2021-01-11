import * as React from 'react'
import { Theme, makeStyles } from '@material-ui/core/styles'
/**Context */
import { useAppContext } from '../AppProvider'

import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		margin: theme.spacing(1),
		width: '25ch',
	},
}))
type Props = {
	name: string
	options: {
		label: string
		value: string
	}[]
}
export const SelectBox: React.FC<Props> = ({ name, options }) => {
	const classes = useStyles()
	const { state, dispatch } = useAppContext()
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({ type: name, payload: event.target.value })
	}

	return (
		<TextField
			select
			className={classes.root}
			id="select-company"
			variant="outlined"
			label={name}
			value={state[name]}
			onChange={handleChange}>
			{options.map((option) => (
				<MenuItem key={option.value} value={option.value}>
					{option.label}
				</MenuItem>
			))}
		</TextField>
	)
}
