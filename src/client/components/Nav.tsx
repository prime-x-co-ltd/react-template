import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
	link: {
		textDecoration: 'none',
		margin: theme.spacing(1),
	},
}))

export const Nav: React.FC = () => {
	const classes = useStyles()
	return (
		<>
			<Link to="/" className={classes.link}>
				<Button variant="contained" color="primary">
					TOP
				</Button>
			</Link>
			<Link to="/About" className={classes.link}>
				<Button variant="contained" color="secondary">
					ABOUT
				</Button>
			</Link>
		</>
	)
}
