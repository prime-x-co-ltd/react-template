import * as React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './theme'
import { App } from './App'
import { AppContextProvider } from './AppProvider'

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<AppContextProvider>
			<App />
		</AppContextProvider>
	</ThemeProvider>,
	document.querySelector('#app')
)
