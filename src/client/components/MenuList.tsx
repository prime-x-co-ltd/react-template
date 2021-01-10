import * as React from 'react'
import { Theme, makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import { routes } from '../routes'

const useStyles = makeStyles((theme: Theme) => ({
	list: {
		width: 'auto',
		backgroundColor: theme.palette.background.paper,
		height: '100vh',
	},
	link: {
		textDecoration: 'none',
		color: 'inherit',
	},
}))

export const MenuList: React.FC = () => {
	const classes = useStyles()
	return (
		<List component="nav" className={classes.list}>
			{routes.map((route, index) => (
				<Link to={route.path} className={classes.link} key={index}>
					<ListItem button>
						<ListItemIcon>{route.icon()}</ListItemIcon>
						<ListItemText primary={route.name} />
					</ListItem>
				</Link>
			))}
		</List>
	)
}
