import * as React from 'react'
import Typography from '@material-ui/core/Typography'

export const DashBoard: React.FC = () => {
	return (
		<div>
			<Typography paragraph>トップ画面</Typography>
			<ul>
				<li>ダッシュボード的なコンテンツ</li>
				<li>お知らせ画面的なコンテンツ</li>
				<li>サイトマップ的なコンテンツ</li>
			</ul>
		</div>
	)
}
