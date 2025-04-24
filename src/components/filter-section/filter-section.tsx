import {  TFilterValue } from '../../types/types'
import { CustomCheckbox } from '../custom-checkbox/custom-checkbox'

import { localSearch } from '../../services/search/search.service'
import { Input } from '../input/input'
import { useState } from 'react'

interface filterSectionProps {
	list?: TFilterValue
}

export function FilterSection({ list }: filterSectionProps) {

	const [searchInput, setSearchInput] = useState('')
	const filteredItems = localSearch(searchInput, list?.filters)
	const isBigArray = list?.filters && list?.filters.length >= 15


	return (
		<>
			<div className='py-10 border-t-stone-500 border-t-1 '>
				<div>
					<h1 className='font-semibold text-1'>{list?.sectionName}</h1>
				</div>
				<div>
					{isBigArray && <div className='py-3'><Input getValue={data => setSearchInput(data)} /></div>}

					<ul className='overflow-y-auto scrollbar max-h-80 w-full'>
						{filteredItems?.map((filter, id) => (
							<li className='py-1' key={`${filter}-${id}`}>
								<CustomCheckbox name={list?.sectionName || ''} htmlFor={filter} />
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	)
}
