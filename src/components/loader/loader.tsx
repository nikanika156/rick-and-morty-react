export function Loader() {
	return (
		<>
			<div className='flex flex-col items-center gap-5'>
				<div className=' h-15 w-15 border-8  border-t-amber-500 border-neutral-500 rounded-[1000px]  animate-spin'>
					<div className='h-'> </div>
				</div>
				<div className="text-xl">
					<p>Loading...</p>
				</div>
			</div>
		</>
	)
}
