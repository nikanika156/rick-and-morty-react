import '../../index.css'
import { Funnel, RotateCw } from 'lucide-react'

import { TFilterValue } from '../../types/types'
import { FilterSection } from '../filter-section/filter-section'
import { useEffect, useRef, useState } from 'react'
import { getWindowWidthService } from '../../services/get-window-width/get-window-width.service'
import {
	desktopView,
	filterFullScreenOff,
	filterFullScreenOn,
	hideMobileFilterWindow,
	mobileView,
	button,
} from './filter-styles'
import { FilterButtons } from '../filter-buttons/filter-buttons'

interface Props {
	filters: TFilterValue[]
}
export function Filters({ filters }: Props) {
	window.addEventListener('resize', () =>
		getWindowWidthService() ? setIsMobile(true) : setIsMobile(false)
	)
	const [isMobile, setIsMobile] = useState(false)
	const [filterIsVisible, setFilterIsVisible] = useState(false)
	const filterWindow = useRef<HTMLDivElement>(null)
	// const filterOpenButton = useRef<HTMLDivElement>(null)

	const changeView = () => {
		const filterPanels = filterWindow.current?.lastChild as HTMLDivElement
		filterWindow.current!.classList.add(...(isMobile ? mobileView : desktopView))
		filterWindow.current!.classList.remove(...(!isMobile ? mobileView : desktopView))
		filterWindow.current?.classList.toggle(hideMobileFilterWindow, isMobile)
		// filterOpenButton.current?.classList.toggle('hidden', !isMobile)
		// filterOpenButton.current?.classList.toggle('fixed', isMobile)
		// filterOpenButton.current?.classList.toggle('flex', isMobile)
		filterPanels.classList.toggle('overflow-scroll', isMobile)
		filterPanels.classList.toggle('h-[90svh]', isMobile)
	}

	const buttonAnimaTions = () => {
		// const resetButton = filterOpenButton.current?.firstChild as HTMLButtonElement
		//
		filterWindow.current!.classList.toggle(hideMobileFilterWindow, !filterIsVisible)
	}

	useEffect(() => {
		buttonAnimaTions()
	}, [filterIsVisible])
	useEffect(() => {
		changeView()
	}, [isMobile])
	useEffect(() => {
		setIsMobile(getWindowWidthService())
	}, [])
	return (
		<>
			<FilterButtons showFilter={(e: boolean) => setFilterIsVisible(e)} />

			{/* */}
			<div ref={filterWindow} className=''>
				<header className='h-20 flex items-center justify-between'>
					<h1 className='text-2xl'>Filters</h1>
					<div className=''>
						<button className='flex items-center outline-0'>
							<RotateCw className='w-4 mr-0.5' />
							clear filters
						</button>
					</div>
				</header>
				<div className=''>
					<div className=' flex flex-col '>
						{filters?.map(filterSection => (
							<FilterSection key={filterSection.sectionName} list={filterSection} />
						))}
					</div>
				</div>
			</div>
		</>
	)
}
