interface Props {
	sendData: (e: number) => void
}
export function HitsPerPage({ sendData }: Props) {
	const hits = {
		16: 16,
		32: 32,
		64: 64,
	}
	const Hits = [16, 32, 64]

	return (
		<>
			<select name='hits per page' id='' onChange={e => sendData(parseInt(e.target.value))}>
				{Hits.map(hit => (
					<option key={hit} value={hit}>{hit} Hits per page</option>
				))}
			</select>
		</>
	)
}
