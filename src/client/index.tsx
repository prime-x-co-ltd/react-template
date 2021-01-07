import * as React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'
import { AppContextProvider } from './AppProvider'

ReactDOM.render(
	<AppContextProvider>
		<App />
	</AppContextProvider>,
	document.querySelector('#app')
)
