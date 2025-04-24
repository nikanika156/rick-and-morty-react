import './cards.css'
import { ICards } from '../../types/types'

interface Props {
	cards: ICards[]
}

export function Cards({ cards }: Props) {
	return (
		<>
			<div className='main'>
				<div className='h-20 flex justify-between items-center'>
					<select name='' id=''></select>
				</div>
				<div className='card-container py-10 border-t-stone-500 border-t-1'>
					{cards?.map((card: ICards) => (
						
						<div className={``} key={card.id}>
							<div className='card '>
								<div className='image'>
									<img src={card.image} alt={card.name+' Image'} />
								</div>

								<div className='description'>
									<p className='card-species'>{card.species}</p>
									<h1 className='card-name'>{card.name}</h1>
									<p className='card-location' title={card?.origin.name}>
										{card.origin.name}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
