// import { Key } from 'lucide-react'

interface Props {
	page: number
	lastPage: number
	sendData: (e: HTMLButtonElement) => void
}

export function PageBtns({ page, lastPage, sendData }: Props) {
	let startPage = 1
	const buttonQuantity = lastPage < 5 ? lastPage : 5

	if (page <= 2) {
		startPage = 1
	} else if (page >= lastPage - 1) {
		startPage = Math.max(1, lastPage - 4) // არ გავიდეს მინუსში
	} else {
		startPage = page - 2
	}

	const pages = Array.from({ length: buttonQuantity }, (_, i) => startPage + i)

	return (
		<>
			<div className='flex gap-2 '>
				{pages.map((button, key) =>
					button == page ? (
						<button
							key={key}
							className=' w-10 h-10 bg-amber-500! hover:bg-amber-600! transition-all'
							onClick={({ target }) => sendData(target as HTMLButtonElement)}
						>
							{button}
						</button>
					) : (
						<button
							key={key}
							className='pretty-btn w-10 h-10 hover:bg-amber-600!'
							onClick={({ target }) => sendData(target as HTMLButtonElement)}
						>
							{button}
						</button>
					)
				)}
			</div>
		</>
	)
}
