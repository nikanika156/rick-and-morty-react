import React, { useEffect, useState } from 'react'
import { IFilters } from '../../types/types'

export default function getFilterTypes() {
	const [filters, setFilters] = useState<IFilters>()

	const getAllPages = async () => {
		let species: string[] = []
		let status: string[] = []
		let gender: string[] = []
		let location: string[] = []
		// const status = [...new Set<string>(data.results.map((x:any)=> x.status))]
		// const species = [...new Set<string>(data.results.map((x:any)=> x.species))]
		// const genders = [...new Set<string>(data.results.map((x:any)=> x.gender))]
		// const location = [...new Set<string>(data.results.map((x:any)=> x.location.name))]
		let nextPage: string = 'https://rickandmortyapi.com/api/character'
		while (nextPage) {
			const response = await fetch(`${nextPage}`)
			const data = await response.json()
			nextPage = data.info.next
			species.push(...data.results.map((x: any) => x.species))
			status.push(...data.results.map((x: any) => x.status))
			gender.push(...data.results.map((x: any) => x.gender))
			location.push(...data.results.map((x: any) => x.location.name))
		}
		species = [...new Set(species)]
		gender = [...new Set(gender)] // **მთელი სიის უნიკალიზაცია**
		status = [...new Set(status)] // **მთელი სიის უნიკალიზაცია**
		location = [...new Set(location)] // **მთელი სიის უნიკალიზაცია**

		console.log(species)
    console.log(status)
    console.log(gender)
    console.log(location)


	}
	useEffect(() => {
		getAllPages()
	}, [])
}
