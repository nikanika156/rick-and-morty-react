import { useEffect, useState } from 'react'
import { Cards } from '../../components/cards/cards'
import { Filters } from '../../components/filters/filters'
import { FiltersAndCards, ICards, IFilters, IFilterValue } from '../../types/types'
import './page.css'
import { GetData } from '../../services/get-data/get-data.service'
import { DataContext } from '../../hooks/use-data-context'
import { findClone } from '../../services/filters/find-clone'
import { deleteClone } from '../../services/filters/delete-clone'

//
//
export function CharactersPage() {
	const [filtersAndCardArr, setFiltersAndCardArr] = useState<FiltersAndCards>({
		filter: [],
		cards: [],
	})
	const [filtersObj, setFiltersObj] = useState<IFilters>({
		gender: [],
		status: [],
		origin: [],
		species: [],
	})


	const [filteredCards, setFilteredCards] = useState<ICards[]>([])
	const [currentFilter, setCurrentFilters] = useState<IFilterValue[]>([])
	const [hitsPerPage, setHitsPerPage] = useState(20)
	const [page, setPage] = useState(1)
	const cards = filteredCards.length > 0 ? filteredCards : filtersAndCardArr.cards
	const PageCount = Math.ceil(cards.length / hitsPerPage)
	const paginated = cards.slice(hitsPerPage * page - hitsPerPage, hitsPerPage * page)
	const handleChange = (e: IFilterValue) => {
		const key = e.filterTitle.toLowerCase() as keyof IFilters
		if (findClone(filtersObj[key]!, e)) {
			setFiltersObj(prev => ({
				...prev,
				[key]: [...deleteClone(prev[key], e.filterValue)],
			}))
		} else {
			setFiltersObj(prev => ({ ...prev, [key]: [...prev[key], e.filterValue] }))
		}
	}
	const filterCards = () => {
		// const originFilter = filtersAndCardArr.cards.filter()
		const arr = filtersAndCardArr.cards.filter(card => {
			const genderFilter = filtersObj.gender.length
				? filtersObj.gender.includes(card.gender)
				: true
			const statusFilter = filtersObj.status.length
				? filtersObj.status.includes(card.status)
				: true

			const speciesFilter = filtersObj.species.length
				? filtersObj.species.includes(card.species)
				: true

			return speciesFilter && statusFilter && genderFilter
		})


setFilteredCards(arr)
		
		}

	
	useEffect(() => {
		GetData().then(x => setFiltersAndCardArr(x))
	}, [])
	useEffect(() => {
		filterCards()
		// console.log(filtersObj);
	}, [filtersObj])
	return (
		<>
			<div className='characters-main'>
				<div className='characters-filter'>
					<DataContext.Provider value={{ sendData: handleChange }}>
						<Filters filters={filtersAndCardArr!.filter} />
					</DataContext.Provider>
				</div>
				<div className='character-main flex-auto'>
					<Cards cards={paginated} />
					<div className='w-full flex justify-center'>
						<div className='flex gap-2 items-center '>
							<button className='pretty-btn'>{page - 2}</button>
							<button className='pretty-btn'>{page - 1}</button>
							<button className='pretty-btn'>{page}</button>
							<button className='pretty-btn'>{page + 2}</button>
							<button className='pretty-btn'>{page + 3}</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
