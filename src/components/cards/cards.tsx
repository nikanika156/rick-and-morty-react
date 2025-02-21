import './cards.css'
import { useState, useEffect } from 'react'
import { IRickAndMorty } from '../../types/types'
import getFilterTypes from '../../scripts/character-filters/get-filter-types'

export function Cards() {
	const [characters, setCharacters] = useState<IRickAndMorty[]>([])

	useEffect(() => {
		fetch('https://rickandmortyapi.com/api/character?')
			.then(response => response.json())
			.then(data => {
				setCharacters(data.results)
			})
	}, [])
	console.log(getFilterTypes());
	

	return (
		<>

			<div className='main'>
				<div className='card-container'>

				{characters.map(card => (
					<div className='card' key={card.id}>
						<div className='image'>
							<img src={card.image} alt='' />
						</div>
						<div className='description'>
							<p className='card-species'>{card.species}</p>
							<h1 className='card-name'>{card.name}</h1>
							<p className='card-location' title={card.location.name}>
								{card.location.name}
							</p>
						</div>
					</div>
				))}
				</div>
			</div>
		</>
	)
}
