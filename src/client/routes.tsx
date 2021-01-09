import * as React from 'react'

import { TopPage } from './pages/TopPage'
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
		name: 'Dashboard',
		component: TopPage,
		icon: () => <DashboardIcon />,
	},
	{
		path: '/search',
		name: 'Search',
		component: SearchPage,
		icon: () => <SearchIcon />,
	},
	{
		path: '/upload',
		name: 'Upload',
		component: UploadPage,
		icon: () => <CloudUploadIcon />,
	},
	{
		path: '/config',
		name: 'Config',
		component: ConfigPage,
		icon: () => <SettingsIcon />,
	},
]
