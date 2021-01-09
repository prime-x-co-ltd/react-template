import * as React from 'react'
import { Theme, makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const useStyles = makeStyles((theme: Theme) => ({
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	drawer: {
		width: 240,
	},
}))

type Props = { title: string }
export const Header: React.FC<Props> = ({ title }) => {
	const classes = useStyles()
	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar>
				<Typography variant="h6">{title}</Typography>
			</Toolbar>
		</AppBar>
	)
}
