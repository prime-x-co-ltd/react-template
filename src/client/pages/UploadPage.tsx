import * as React from 'react'
import { Theme, makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import { InputForm } from '../components/InputForm'
import { DropZone } from '../components/DropZone'

const useStyles = makeStyles((theme: Theme) => ({
	divider: {
		margin: theme.spacing(3),
	},
}))

export const UploadPage: React.FC = () => {
	const classes = useStyles()
	return (
		<div style={{ width: '100%', overflow: 'scroll' }}>
			<Typography paragraph>登録画面</Typography>
			<ul>
				<li>設定項目</li>
				<li>登録時アクション</li>
				<li>結果表示など</li>
			</ul>
			<Divider className={classes.divider} />
			<InputForm />
			<Divider className={classes.divider} />
			<Typography paragraph gutterBottom>
				ドラッグ＆ドロップ or
				ファイル選択ダイアログからファイルを取り込む（項目は要相談）
			</Typography>
			<DropZone />
		</div>
	)
}
