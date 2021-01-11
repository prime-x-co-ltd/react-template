import * as React from 'react'
import { Theme, makeStyles, withStyles } from '@material-ui/core/styles'

import { CopyToClipboard } from 'react-copy-to-clipboard'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import Tooltip from '@material-ui/core/Tooltip'
import InputAdornment from '@material-ui/core/InputAdornment'

const useStyles = makeStyles((theme: Theme) => ({
	url: {
		width: '100%',
		marginBottom: theme.spacing(2),
	},
}))

/**Style-Override (deprecated)*/
const LightTooltip = withStyles((theme: Theme) => ({
	tooltip: {
		backgroundColor: theme.palette.primary.main,
		boxShadow: theme.shadows[1],
		fontSize: 16,
	},
}))(Tooltip)

export const UploadURL: React.FC = () => {
	const classes = useStyles()
	const [url, setUrl] = React.useState(
		'https://sep-px-ad-img.s3-ap-northeast-1.amazonaws.com/nigawa236_G1_1200x1200(fb)_191003.jpg'
	)
	const [open, setOpen] = React.useState(false)
	const handleCloseTip = () => setOpen(false)
	const handleClickTip = () => setOpen(true)

	return (
		<TextField
			id="upload-url"
			label="URL"
			className={classes.url}
			defaultValue={url}
			InputProps={{
				readOnly: true,
				startAdornment: (
					<InputAdornment position="start">
						<LightTooltip
							arrow
							open={open}
							onClose={handleCloseTip}
							disableHoverListener
							placement="left"
							title="Copied!">
							<CopyToClipboard text={url}>
								<IconButton onClick={handleClickTip}>
									<FileCopyIcon />
								</IconButton>
							</CopyToClipboard>
						</LightTooltip>
					</InputAdornment>
				),
			}}
		/>
	)
}
