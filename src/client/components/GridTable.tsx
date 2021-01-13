import * as React from 'react'
import { Theme, makeStyles } from '@material-ui/core/styles'

import {
	DataGrid,
	ColDef,
	ValueGetterParams,
	RowSelectedParams,
	ValueFormatterParams,
} from '@material-ui/data-grid'

import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles((theme: Theme) => ({
	table: {
		// maxWidth: 800,
		width: '100%',
	},
	image: {
		maxWidth: 200,
		maxHeight: 200,
	},
}))

export const GridTable = () => {
	const classes = useStyles()
	const handleEdit = (event: React.MouseEvent) => {
		console.log(event)
		return
	}
	const handleDelete = (event: React.MouseEvent) => {
		console.log(event)
		return
	}

	/**Columns */
	const columns: ColDef[] = [
		{ field: 'id', headerName: 'ID', width: 100 },
		{
			field: 'image',
			headerName: 'Preview',
			width: 150,
			renderCell: (params: ValueFormatterParams) => (
				<img
					src={params.value as string}
					style={{ maxWidth: 100, maxHeight: 100 }}
					alt="NO IMAGE"
				/>
			),
		},
		{ field: 'imageName', headerName: 'Name', width: 130 },
		{
			field: 'size',
			headerName: 'Size [bytes]',
			type: 'number',
			width: 130,
		},
		{
			field: 'width',
			headerName: 'Width [px]',
			type: 'number',
			width: 130,
		},
		{
			field: 'height',
			headerName: 'Height [px]',
			type: 'number',
			width: 130,
		},
		{
			field: 'imageUrl',
			headerName: 'URL',
			width: 400,
			renderCell: (params: ValueFormatterParams) => (
				<a
					href={params.value as string}
					target="_brank"
					style={{ color: 'inherit' }}>
					{params.value}
				</a>
			),
		},
	]
	/**Rows */
	const [rows, setRows] = React.useState([
		{
			id: 1,
			image:
				'https://www.daikyo-anabuki.co.jp/image/o/buy/madori/MHF37651.jpg',
			imageName: 'test001.png',
			size: 123456,
			width: 1200,
			height: 800,
			imageUrl:
				'https://www.daikyo-anabuki.co.jp/image/o/buy/madori/MHF37651.jpg',
		},
		{
			id: 2,
			image:
				'https://www.daikyo-anabuki.co.jp/image/o/buy/madori/MHF37334.jpg',
			imageName: 'test002.png',
			size: 200000,
			width: 1200,
			height: 800,
			imageUrl:
				'https://www.daikyo-anabuki.co.jp/image/o/buy/madori/MHF37334.jpg',
		},
		{
			id: 3,
			image:
				'https://www.daikyo-anabuki.co.jp/image/o/buy/madori/MHF37649.jpg',
			imageName: 'test003.png',
			size: 150000,
			width: 1200,
			height: 800,
			imageUrl:
				'https://www.daikyo-anabuki.co.jp/image/o/buy/madori/MHF37649.jpg',
		},
		{
			id: 4,
			image:
				'https://www.daikyo-anabuki.co.jp/image/o/buy/madori/MHF37744.jpg',
			imageName: 'test004.png',
			size: 165000,
			width: 1200,
			height: 800,
			imageUrl:
				'https://www.daikyo-anabuki.co.jp/image/o/buy/madori/MHF37744.jpg',
		},
	])
	const handleClickRow = (selected: RowSelectedParams) => {
		console.log(selected)
		setRows(rows)
	}
	return (
		<>
			<IconButton>
				<EditIcon />
			</IconButton>
			<IconButton>
				<DeleteIcon />
			</IconButton>
			<div style={{ height: 400, width: '100%' }}>
				<DataGrid
					className={classes.table}
					rows={rows}
					columns={columns}
					pageSize={5}
					// checkboxSelection
					disableMultipleSelection={true}
					onRowSelected={handleClickRow}
				/>
			</div>
		</>
	)
}
