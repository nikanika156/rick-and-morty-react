import { IFilterValue } from '../../types/types'

// export const deleteClone = (prev: IFilterValue[], e: IFilterValue) =>
// 	prev.filter(z => z.filterTitle !== e.filterTitle || z.filterValue !== e.filterValue)



export const deleteClone = (prev: string[], e: string) =>
	prev.filter(z =>  z !== e)
