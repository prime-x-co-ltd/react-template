import * as React from 'react'
import Typography from '@material-ui/core/Typography'

export const ConfigPage: React.FC = () => {
	return (
		<div>
			<Typography paragraph>設定画面</Typography>
			<ul>
				<li>ユーザ側のカスタマイズ要素</li>
				<li>設定項目</li>
				<li>更新時アクション</li>
			</ul>
		</div>
	)
}
