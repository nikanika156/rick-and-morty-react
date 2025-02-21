import './App.css'
import { useState } from 'react'
import { CharactersPage } from './pages/characters/page'

export function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<div>
				<CharactersPage />
			</div>
		</>
	)
}
