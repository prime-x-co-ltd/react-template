import * as React from 'react'
import { Theme, makeStyles } from '@material-ui/core/styles'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import { routes } from '../routes'

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		display: 'flex',
	},
	list: {
		width: '100%',
		maxWidth: 240,
		backgroundColor: theme.palette.background.paper,
		height: '100vh',
		marginRight: theme.spacing(1),
	},
	link: {
		textDecoration: 'none',
		color: 'inherit',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	drawer: {
		width: 240,
	},
}))

export const SideBar: React.FC = () => {
	const classes = useStyles()
	return (
		<Drawer className={classes.drawer} variant="permanent">
			<Toolbar />
			<Router>
				<List component="nav" className={classes.list}>
					{routes.map((route, index) => (
						<Link
							to={route.path}
							className={classes.link}
							key={index}>
							<ListItem button>
								<ListItemIcon>{route.icon()}</ListItemIcon>
								<ListItemText primary={route.name} />
							</ListItem>
						</Link>
					))}
				</List>
			</Router>
		</Drawer>
	)
}
