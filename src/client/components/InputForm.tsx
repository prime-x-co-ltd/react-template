import * as React from 'react'
import { Theme, makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import { data } from '../sample_data'
import { SelectBox } from '../components/SelectBox'

const useStyles = makeStyles((theme: Theme) => ({
	divider: {
		margin: theme.spacing(3),
	},
}))

export const InputForm: React.FC = () => {
	const classes = useStyles()
	return (
		<>
			<Typography paragraph gutterBottom>
				区分 | 上位区分を設定すると、下位区分が絞り込まれるようにする
			</Typography>
			<SelectBox name="companyName" options={data.comparyName} />
			<SelectBox name="projectCode" options={data.projectCode} />
			<SelectBox name="projectName" options={data.projectName} />
			<Typography paragraph gutterBottom>
				メタ情報 |
				エンドユーザが、設定画面からカスタマイズ出来るようにする（保守が面倒くさそう。。）
			</Typography>
			<SelectBox name="wordForSale" options={data.wordForSale} />
			<SelectBox name="imgForSale" options={data.imgForSale} />
		</>
	)
}
