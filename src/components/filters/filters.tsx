import { RotateCw } from 'lucide-react'
import styles from './filters.module.css'
import '../../index.css'

export function Filters() {
	return (
		<>
			<div className={styles.main}>
				<header className='h-80'>
					<div className={styles.header}>
						<h1>Filters</h1>
						<div>
							<button>
								<RotateCw />
								clear filters
							</button>
						</div>
					</div>
				</header>
				<div className={styles.filterSection}>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</>
	)
}
