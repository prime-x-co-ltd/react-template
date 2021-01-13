import * as React from 'react'
import { Theme, makeStyles } from '@material-ui/core/styles'

import { ReactGrid } from '../components/ReactGrid'

import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme: Theme) => ({
	divider: {
		margin: theme.spacing(3),
	},
}))

export const ConfigPage: React.FC = () => {
	const classes = useStyles()
	return (
		<div>
			<Typography paragraph>設定画面</Typography>
			<ul>
				<li>ユーザ側のカスタマイズ要素</li>
				<li>設定項目</li>
				<li>更新時アクション</li>
			</ul>
			<Divider className={classes.divider} />
			<ReactGrid />
		</div>
	)
}
