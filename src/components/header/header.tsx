import { Link } from 'react-router-dom'
import { Logo } from '../../../public/svg/logo'

export function Header() {
	return (
		<>
			<header className='h-20 flex items-center bg-neutral-900 box-border px-10'>
				<ul className='flex items-center justify-end w-full gap-5 font-semibold text-lg text-neutral-500'>
					<li className='mr-auto'>
						<Link to={'/characters'}>
							<h1 className='flex items-center gap-2 font-bold'>
								<Logo size={45}/>
								<p className='text-[26px]'>Home</p>
							</h1>
						</Link>
					</li>
					<li>
						<Link to={'/characters'}>
							<h1>Characters</h1>
						</Link>
					</li>
					<li>
						<Link to={'/episode'}>
							<h1>Episodes</h1>
						</Link>
					</li>
					<li>
						<Link to={'/location'}>
							<h1>Locations</h1>
						</Link>
					</li>
				</ul>
			</header>
		</>
	)
}
