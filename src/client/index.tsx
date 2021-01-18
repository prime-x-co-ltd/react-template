import * as React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './theme'
import { App } from './App'
import { AppContextProvider } from './AppProvider'
import { APIContextProvider } from './APIProvider'

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<APIContextProvider>
			<AppContextProvider>
				<App />
			</AppContextProvider>
		</APIContextProvider>
	</ThemeProvider>,
	document.querySelector('#app')
)
