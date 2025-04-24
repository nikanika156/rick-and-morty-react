export interface ICards {
	id: number
	name: string
	status: string
	species: string
	gender: string
	origin: {
		name: string
	}
	image: string
}
export interface IFilters {

	gender: string[]
	species: string[]
	status: string[]
	origin: string[]
}

export type TFilterValue = {
	sectionName: string
	filters: string[]
}

export interface sendDataProps {
	getValue: (value: string) => void
}

export interface IForFilters {
	species: string
	gender: string
	status: string
}

export interface IFilterValueObj {
	filterTitle: string
	filterValue: string
}
export interface FiltersAndCards {
	filter: TFilterValue[]
	cards: ICards[]
}
export interface IFilterValue {
	filterTitle: keyof IFilters | string
	filterValue: string
}
