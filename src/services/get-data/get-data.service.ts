// import React, { useEffect, useState } from 'react'

import { ICards, TFilterValue } from '../../types/types'
import axios from 'axios'

export async function GetData() {
	// const [allResults, setAllResults] = useState<ICards[]>([])

	const generateArrayUpTo = (n: number): number[] => {
		return Array.from({ length: n }, (_, i: number) => i + 1)
	}
	const createFilter = (sectionTitle: string, sectionFilter: string[]): TFilterValue => {
		return {
			sectionName: sectionTitle,
			filters: sectionFilter,
		}
	}

	let cardQuantity = 0
	let results: ICards[] = []
	let url: string | undefined = `https://rickandmortyapi.com/api/character`

	try {
		const { data }: any = await axios.get(url)
		cardQuantity = data.info.count
	} catch (error) {
		console.log(error)
	}
	try {
		const getAllCardUrl = (url += '/' + generateArrayUpTo(cardQuantity).join(','))
		const { data }: { data: ICards[] } = await axios.get(getAllCardUrl)
		results = data
	} catch (error) {
		console.log(error)
	}

	const filters: TFilterValue[] = [
		createFilter('Gender', [...new Set(results.map(x => x.gender))]),
		createFilter('Species', [...new Set(results.map(x => x.species))]),
		createFilter('Status', [...new Set(results.map(x => x.status))]),
		// createFilter('Origin', [...new Set(results.map(x => x.origin.name))]),
	]

	return { filter: filters, cards: results }
}
