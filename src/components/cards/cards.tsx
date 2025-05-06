import { useEffect, useState } from 'react'
import { ICards } from '../../types/types'
import { Ellipsis } from 'lucide-react'
// import './cards.css'
interface Props {
	cards: ICards[]
}

export function Cards({ cards }: Props) {
	return (
		<>
			<div className='main  flex-[3_1]'>
				<div className='border-t-stone-500 border-t-1 py-10 '>
					<ul
						className='min-[960px]:gap-8 max-[960px]:gap-y-12.5 max-[960px]:gap-x-7.5

					
					grid sm:grid-cols-2 min-[960px]:grid-cols-[1fr_1fr_1fr] xl:grid-cols-[1fr_1fr_1fr_1fr]!'
					>
						{cards?.map((card: ICards) => (
							<li key={card.id} className='min-w-[175px]  flex-[1_1] flex min-[960px]:flex-col'>
								{/* <div className='flex-[1_1] flex '> */}
								<div className='w-[175px]  flex-[0_0_35%] max-[960px]:mr-6'>
									<img src={card.image} alt={card.name} className='w-full! ' />
								</div>

								<div className='flex-[0_1_65%] min-w-0'>
									<p className='truncate text-neutral-400 font-bold text-pretty'>{card.species}</p>
									<h1 className='truncate font-bold'>{card.name}</h1>
									<p className='truncate' title={card?.origin.name}>
										{card.origin.name}
									</p>
									{/* </div> */}
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	)
}
