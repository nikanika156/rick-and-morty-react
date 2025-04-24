export function localSearch(search: string, list?: string[]): string[] {
	const filteredItems = list?.filter(item =>
		item.toLowerCase().includes(search.toLowerCase())
	)

	return filteredItems || []
}

