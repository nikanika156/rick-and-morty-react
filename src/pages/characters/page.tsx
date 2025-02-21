import { Cards } from '../../components/cards/cards'
import { Filters } from '../../components/filters/filters'
import styles from './page.module.css'
export function CharactersPage() {
	return (
		<>
			<div className={styles.main}>
				<div className={styles.filter}>
					<Filters />
				</div>
				<div className={styles.cards}>
					<Cards />
				</div>
			</div>
		</>
	)
}
