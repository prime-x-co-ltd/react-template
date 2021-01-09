import * as React from 'react'
import { theme } from './theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { SideBar } from './components/SideBar'
import { Header } from './components/Header'

export const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<Header title="Your App Name" />
			<SideBar />
		</ThemeProvider>
	)
}
