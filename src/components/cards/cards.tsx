import { useEffect, useState } from 'react'
import { ICards } from '../../types/types'
import { list, listMd, listSm, listXl } from './cards.tailwind'
// import './cards.css'
interface Props {
	cards: ICards[]
}


export function Cards({ cards }: Props) {
	return (
		<>
			<div className=' border-t-stone-500 border-t-1 py-10 w-full '>
				<ul className={`${listSm} ${listMd} ${listXl} ${list}`}>
					{cards?.map((card: ICards) => (
						<li key={card.id} className=' '>
							<div className='flex min-[900px]:flex-col'>
								<div className='min-[900px]:w-[175px] max-[900px]:flex-[0_0_35%] max-[900px]:mr-6 aspect-square'>
									<img src={card.image} alt={card.name} className='w-full!' />
								</div>

								<div className='min-[900px]:w-[175px] max-[900px]:flex-[0_1_65%] min-w-0'>
									<p className='truncate text-neutral-400 font-bold'>{card.species}</p>
									<h1 className='truncate font-bold'>{card.name}</h1>
									<p className='truncate' title={card?.origin.name}>
										{card.origin.name}
									</p>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}
