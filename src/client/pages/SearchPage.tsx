import * as React from 'react'
import Typography from '@material-ui/core/Typography'

export const SearchPage: React.FC = () => {
	return (
		<div>
			<Typography paragraph>検索画面</Typography>
			<ul>
				<li>条件選択</li>
				<li>結果画面</li>
				<li>変更・削除などのアクション</li>
			</ul>
		</div>
	)
}
