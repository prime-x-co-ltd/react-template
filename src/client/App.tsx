import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Nav } from './components/Nav'
import { TopPage } from './pages/TopPage'
import { AboutPage } from './pages/AboutPage'

export const App: React.FC = () => {
	return (
		<Router>
			<Nav />
			<Switch>
				<Route exact path="/" component={TopPage} />
				<Route path="/About" component={AboutPage} />
			</Switch>
		</Router>
	)
}
