import * as React from 'react'
import { Theme, makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import { InputForm } from '../components/InputForm'
import { GridTable } from '../components/GridTable'

const useStyles = makeStyles((theme: Theme) => ({
	divider: {
		margin: theme.spacing(3),
	},
}))

export const SearchPage: React.FC = () => {
	const classes = useStyles()
	return (
		<div style={{ width: '100%', overflow: 'scroll' }}>
			<Typography paragraph>検索画面</Typography>
			<ul>
				<li>条件選択</li>
				<li>結果画面</li>
				<li>変更・削除などのアクション</li>
			</ul>
			<Divider className={classes.divider} />
			<InputForm />
			<Divider className={classes.divider} />
			<Typography paragraph gutterBottom>
				表示項目は要相談
			</Typography>
			<ul>
				<li>キャンペーン（=掲載案）単位で絞り込めないと。。</li>
				<li>画像一括DL</li>
				<li>変更・削除アクション（フロートにする？）</li>
			</ul>
			<GridTable />
		</div>
	)
}
