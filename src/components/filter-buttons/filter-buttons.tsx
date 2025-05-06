import { Funnel, RotateCw } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import './filter-buttons.css'
interface Props {
	showFilter: (isVisible: boolean) => void
}
export function FilterButtons({ showFilter }: Props) {
	const buttonsContainer = useRef<HTMLDivElement>(null)
	const [filterIsVisible, setFilterIsVisible] = useState(false)
	// const filterOpenButton = useRef(null)
	const button = 'flex items-center transition-colors duration-150 rounded-xl outline-0 py-4 px-11 text-overflow-hidden'

	const handleFilterVisible = () => {
		setFilterIsVisible(prev => !prev)
		// console.log('');
	}
	const isVisible = ['h-20', 'bottom-0', 'w-full']
	const isNotVisible = ['h-10', 'bottom-[5%]', 'w-[150px]', 'rounded-xl',]
	useEffect(() => {}, [])
	useEffect(() => {
		const resetbutton = buttonsContainer.current?.firstChild as HTMLButtonElement
		const filterShowButton = buttonsContainer.current?.lastChild as HTMLButtonElement
		const buttons = buttonsContainer.current?.children
	// Object.entries(buttons)
		
		showFilter(filterIsVisible)
		buttonsContainer.current?.classList.add(...(filterIsVisible ? isVisible : isNotVisible))
		buttonsContainer.current?.classList.remove(...(!filterIsVisible ? isVisible : isNotVisible))
		// resetbutton.classList.toggle('',filterIsVisible)
		resetbutton.classList.toggle('h-0', filterIsVisible)
		resetbutton.classList.toggle('w-30', !filterIsVisible)
		resetbutton.classList.toggle('hidden', !filterIsVisible)
	}, [filterIsVisible])
	return (
		<>
			<div
				ref={buttonsContainer}
				className='fixed flex justify-center items-center translate-x-[50%] right-[50%] z-999 bg-amber-700 min-h-14 min-w-40 transition-all! duration-400'
			>
				<button className={`${button} transition-all! duration-1000 bg-neutral-300`}>
					<RotateCw className='mr-0.5' />
					<p className=''>clear filters</p>
				</button>
				<button onClick={handleFilterVisible} className={`${button} bg-amber-500`}>
					<Funnel />
					<p className='ml-0.5'>Filters</p>
				</button>
			</div>
		</>
	)
}
