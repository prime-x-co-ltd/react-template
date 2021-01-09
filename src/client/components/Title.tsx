import * as React from 'react'

type Props = { name: string }
export const Title: React.FC<Props> = ({ name }) => {
	return <h1>{name}</h1>
}
