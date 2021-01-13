import * as React from 'react'
import Paper from '@material-ui/core/Paper'

import { SortingState, IntegratedSorting } from '@devexpress/dx-react-grid'

import {
	Grid,
	Table,
	TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui'

const columnExtensions = [
	{ columnName: 'id', width: '10%' },
	{ columnName: 'name', width: '15%' },
	{ columnName: 'size', width: '10%' },
	{ columnName: 'url', width: 'auto' },
]

export const ReactGrid = () => {
	const [columns] = React.useState([
		{ name: 'id', title: 'ID' },
		{ name: 'name', title: 'Name' },
		{ name: 'size', title: 'Size' },
		{ name: 'url', title: 'URL' },
	])
	const [rows] = React.useState([
		{
			id: 1,
			name: 'test001.png',
			size: '1024',
			url:
				'https://www.daikyo-anabuki.co.jp/image/o/buy/madori/MHF37651.jpg',
		},
		{
			id: 2,
			name: 'test002.png',
			size: '1024',
			url:
				'https://www.daikyo-anabuki.co.jp/image/o/buy/madori/MHF37334.jpg',
		},
	])
	return (
		<Paper>
			<Grid rows={rows} columns={columns}>
				<SortingState />
				<IntegratedSorting />
				<Table columnExtensions={columnExtensions} />
				<TableHeaderRow showSortingControls />
			</Grid>
		</Paper>
	)
}
