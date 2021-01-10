import * as React from 'react'
// import { MenuLayout } from './layout/PersistentDrawerMenu'
import { MenuLayout } from './layout/MiniVariantDrawerMenu'
import { GridContents, ContainContents } from './components/Contents'

export const App: React.FC = () => {
	return (
		<MenuLayout title="Your App Name">
			<GridContents />
			{/* <ContainContents /> */}
		</MenuLayout>
	)
}
