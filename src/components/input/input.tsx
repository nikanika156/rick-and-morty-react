import { Search } from 'lucide-react'

import { sendDataProps } from '../../types/types'

export function Input({ getValue }: sendDataProps) {
	return (
		<>
			<form className='h-full w-full flex items-center bg-stone-600 rounded'>                              
				<div className='px-2'>
					<Search size={14} />
				</div>
				<input
					className=' w-full bg-transparent my-3 rounded flex-1 outline-0 h-full'
					type='text'
					placeholder='search...'
					onChange={x => {
						getValue(x.target.value)
					}}
				/>
			</form>
		</>
	)
}
