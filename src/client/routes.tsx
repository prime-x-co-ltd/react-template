import * as React from 'react'

import { DashBoard } from './pages/DashBoard'
import { SearchPage } from './pages/SearchPage'
import { UploadPage } from './pages/UploadPage'
import { ConfigPage } from './pages/ConfigPage'

import DashboardIcon from '@material-ui/icons/Dashboard'
import SearchIcon from '@material-ui/icons/Search'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import SettingsIcon from '@material-ui/icons/Settings'

export const routes = [
	{
		path: '/',
		name: 'Top',
		exact: true,
		component: DashBoard,
		icon: () => <DashboardIcon />,
	},
	{
		path: '/search',
		name: 'Search',
		exact: true,
		component: SearchPage,
		icon: () => <SearchIcon />,
	},
	{
		path: '/upload',
		name: 'Upload',
		exact: true,
		component: UploadPage,
		icon: () => <CloudUploadIcon />,
	},
	{
		path: '/config',
		name: 'Config',
		exact: true,
		component: ConfigPage,
		icon: () => <SettingsIcon />,
	},
]
