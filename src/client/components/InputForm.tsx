import * as React from 'react'
import { Theme, makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import { SelectProjectCode, SelectTag } from '../components/SelectBox'

const useStyles = makeStyles((theme: Theme) => ({
	divider: {
		margin: theme.spacing(3),
	},
}))

export const InputForm: React.FC = () => {
	const classes = useStyles()
	return (
		<>
			<ul>
				<li>PJコードで絞り込む（PJ名、企業名は自動入力で編集不可</li>
				<li>キャンペーン名は手動？どこから持ってくるの？</li>
				<li>
					1キャンペーン=1掲載案？なので、キャンペーン単位で絞り込みたい
				</li>
				<li>そうなるとキャンペーン名が重要。手動だとブレそう。。</li>
			</ul>
			<SelectProjectCode />
			<Divider />
			<ul>
				<li>タグ情報の詳細早く出して</li>
				<li>画像1枚ごとにタグつけるのめんどくさくない？</li>
			</ul>
			<SelectTag />
		</>
	)
}
