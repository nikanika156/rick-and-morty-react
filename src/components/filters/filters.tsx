import './filters.css'
import { Funnel, RotateCw } from 'lucide-react'

import { TFilterValue } from '../../types/types'
import { FilterSection } from '../filter-section/filter-section'
import { useEffect, useRef, useState } from 'react'
import { getWindowWidthService } from '../../services/get-window-width/get-window-width.service'
import { desktopView, hideMobileFilterWindow, mobileView, button } from './filter.tailwind'
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

	useEffect(() => {
		document.body.classList.toggle('overflow-hidden', filterIsVisible)

		filterWindow.current!.classList.toggle(hideMobileFilterWindow, !filterIsVisible)
	}, [filterIsVisible])
	useEffect(() => {
		// changeView()
		filterWindow.current!.classList.toggle(hideMobileFilterWindow, isMobile)
		console.log('ismobile');
		console.log(getWindowWidthService());
		
	}, [isMobile])
	useEffect(() => {
		setIsMobile(getWindowWidthService())
	}, [])
	return (
		<>
			{/* <div className=' bottom-0'> */}
			<FilterButtons showFilter={(e: boolean) => setFilterIsVisible(e)} />

			{/* </div> */}

			<div ref={filterWindow} className={`${isMobile ? `${mobileView} ddd` : desktopView} `}>
				<header className={` h-20 flex-shrink-0  flex items-center justify-between`}>
					<h1 className='text-2xl'>Filters</h1>
					<div className=''>
						<button className='flex items-center outline-0'>
							<RotateCw className='w-4 mr-0.5' />
							clear filters
						</button>
					</div>
				</header>

				<div className={` overflow-scroll  box-border pb-20 overflow-x-hidden scroll-m-100 `}>
					{filters?.map(filterSection => (
						<FilterSection key={filterSection.sectionName} list={filterSection} />
					))}
				</div>

				<div className='w-full min-h-20'></div>
			</div>
		</>
	)
}
