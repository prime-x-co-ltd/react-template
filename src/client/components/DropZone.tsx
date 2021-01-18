import * as React from 'react'
import { Theme, makeStyles } from '@material-ui/core/styles'
/**HTTP Client */
import axios from 'axios'
/**Context */
import { useAppContext } from '../AppProvider'
/**External Components */
import { UploadURL } from './UploadURL'
/**Dropzone */
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone, {
	IDropzoneProps,
	IPreviewProps,
} from 'react-dropzone-uploader'

import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/Clear'

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: '100%',
		display: 'flex',
		flexGrow: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: theme.spacing(1),
		border: '1px solid #fff',
	},
	image: {
		maxWidth: 320,
		maxHeight: 1040,
	},
}))

/**Custom-Preview */
const Preview = ({
	meta,
	isUpload,
	canRemove,
	fileWithMeta,
}: IPreviewProps) => {
	const classes = useStyles()
	const { previewUrl, name, size, width, height, percent } = meta
	const { remove } = fileWithMeta

	return (
		<div className={classes.root}>
			{previewUrl && (
				<img
					className={classes.image}
					src={previewUrl}
					alt={name}
					title={name}
				/>
			)}
			<div>
				{previewUrl && <Typography variant="h6">{name}</Typography>}
				{previewUrl && (
					<Typography variant="h6">
						{width} x {height} px
					</Typography>
				)}
			</div>
			{previewUrl && <Typography variant="h6">{size} bytes</Typography>}
			<div>
				{isUpload && (
					<progress
						max={100}
						value={
							status === 'done' || status === 'headers_received'
								? 100
								: percent
						}
					/>
				)}
				{canRemove && (
					<IconButton onClick={remove}>
						<ClearIcon />
					</IconButton>
				)}
			</div>
		</div>
	)
}

export const DropZone: React.FC = () => {
	const { dispatch } = useAppContext()

	const getUploadParams: IDropzoneProps['getUploadParams'] = () => {
		return { url: 'https://httpbin.org/post' }
	}
	const handleChangeStatus: IDropzoneProps['onChangeStatus'] = (
		{ meta },
		status
	) => {
		console.log(status, meta)
	}
	const handleSubmit: IDropzoneProps['onSubmit'] = (files, allFiles) => {
		const upData = async () => {
			const params = new FormData()
			params.append('uploadFile', files[0].file)

			const headers = {
				accept: 'application/json',
				'Content-Type': 'multipart/form-data',
			}

			const res = await axios.post(
				'https://localhost:3000/api/v1/upload',
				params,
				{ headers }
			)
			console.log(res)
			dispatch({ type: 'uploadUrl', payload: res.data.url })
		}
		upData()
		allFiles.forEach((f) => f.remove())
	}
	return (
		<>
			<UploadURL />
			<Dropzone
				getUploadParams={getUploadParams}
				onChangeStatus={handleChangeStatus}
				onSubmit={handleSubmit}
				accept="image/*,audio/*,video/*"
				maxFiles={1}
				multiple={false}
				canRemove={true}
				inputContent="Drag Files to here ..."
				submitButtonContent="UPLOAD"
				PreviewComponent={Preview}
				styles={{
					dropzone: {
						border: '2px dotted #ececec',
					},
					inputLabel: { color: '#fff' },
				}}
			/>
		</>
	)
}
