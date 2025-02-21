export interface IRickAndMorty {
	id: number
	name: string
	status: string
	species: string
	gender: string
	location: {
		name: string
	}
	image: string
}
export interface IFilters {
	gender: string[]
	species: string[]
	status: string[]
	location: {
		name: string[]
	}
}
