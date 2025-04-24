import './filters.css'
import '../../index.css'
import { RotateCw } from 'lucide-react'
import './filters.css'
import { TFilterValue } from '../../types/types'
import { FilterSection } from '../filter-section/filter-section'

interface Props {
	filters: TFilterValue[]
}
export function Filters({ filters }: Props) {
	return (
		<>
			<div className='filters-main'>
				<header className='h-20 flex justify-between items-center p-'>
					<div className='header'>
						<h1>Filters</h1>
						<div className=''>
							<button className='flex items-center '>
								<RotateCw />
								clear filters
							</button>
						</div>
					</div>
				</header>
				<div className='filterSection flex flex-col w-full '>
					{filters?.map(filterSection => (
						<FilterSection key={filterSection.sectionName} list={filterSection} />
					))}
				</div>
			</div>
		</>
	)
}
