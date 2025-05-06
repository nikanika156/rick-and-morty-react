import { useEffect, useState } from 'react'
import { Cards } from '../../components/cards/cards'
import { Filters } from '../../components/filters/filters'
import { FiltersAndCards, ICards, IFilters, IFilterValue } from '../../types/types'
import { GetData } from '../../services/get-data/get-data.service'
import { DataContext } from '../../hooks/use-data-context'
import { findClone } from '../../services/filters/find-clone'
import { deleteClone } from '../../services/filters/delete-clone'
import { PageBtns } from '../../components/page-btns/page-btns'
import { HitsPerPage } from '../../components/hits-per-page/hits-per-page'
// import { FiltersMobile } from '../../components/filters-mobileview/filters.mobile'
import { getWindowWidthService } from '../../services/get-window-width/get-window-width.service'

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
	const [hitsPerPage, setHitsPerPage] = useState(16)
	const [page, setPage] = useState(1)
	const checkFilters = Object.entries(filtersObj).some(x => x[1].length > 0)
	const cards = checkFilters ? filteredCards : filtersAndCardArr.cards
	const PageCount = Math.ceil(cards.length / hitsPerPage)
	const paginated = cards.slice(hitsPerPage * page - hitsPerPage, hitsPerPage * page)
	const handleFilterChange = (e: IFilterValue) => {
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
		const arr = filtersAndCardArr.cards.filter(card => {
			const genderFilter = filtersObj.gender.length ? filtersObj.gender.includes(card.gender) : true
			const statusFilter = filtersObj.status.length ? filtersObj.status.includes(card.status) : true
			const speciesFilter = filtersObj.species.length
				? filtersObj.species.includes(card.species)
				: true
			const originFilter = filtersObj.origin.length
				? filtersObj.origin.includes(card.origin.name)
				: true

			return speciesFilter && statusFilter && genderFilter && originFilter
		})
		setPage(1)
		setFilteredCards(arr)
	}

	useEffect(() => {
		GetData().then(x => setFiltersAndCardArr(x))
	}, [])
	useEffect(() => {
		filterCards()
	}, [filtersObj])
	return (
		<>
			<div className=' flex'>
				<DataContext.Provider value={{ sendData: handleFilterChange }}>
					
					<Filters filters={filtersAndCardArr!.filter} />
					{/* <FiltersMobile filters={filtersAndCardArr!.filter} /> */}
				</DataContext.Provider>

				<div className='character-main max-[960px]:mx-10 min-[960px]:mr-10   flex-[3_1] flex flex-col items-center w-min'>
					<header className='w-full h-20 flex items-center justify-end'>
						<HitsPerPage sendData={(e: number) => setHitsPerPage(e)} />
					</header>
					<Cards cards={paginated} />
					<PageBtns
						lastPage={PageCount}
						page={page}
						sendData={(e: HTMLButtonElement) => setPage(parseInt(e.innerText))}
					/>
					{/* </div> */}
				</div>
			</div>
		</>
	)
}
