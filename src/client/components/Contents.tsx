import * as React from 'react'
/**Styles */
import { Theme, makeStyles } from '@material-ui/core/styles'
/**Router */
import { Route } from 'react-router-dom'
import { routes } from '../routes'
/**Contents */
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		// paddingTop: theme.spacing(2),
		// paddingBottom: theme.spacing(2),
		padding: theme.spacing(2),
	},
	// paper: {
	// 	padding: theme.spacing(2),
	// 	display: 'flex',
	// 	overflow: 'auto',
	// 	flexDirection: 'column',
	// },
	// fixedHeight: {
	// 	height: 240,
	// },
}))

export const GridContents: React.FC = () => {
	const classes = useStyles()
	return (
		<Grid container className={classes.container}>
			{routes.map((route, index) => (
				<Route
					path={route.path}
					component={route.component}
					exact={route.exact}
					key={index}
				/>
			))}
		</Grid>
	)
}

export const ContainContents: React.FC = () => {
	const classes = useStyles()
	return (
		<Container maxWidth="lg" className={classes.container}>
			{routes.map((route, index) => (
				<Route
					path={route.path}
					component={route.component}
					exact={route.exact}
					key={index}
				/>
			))}
		</Container>
	)
}
