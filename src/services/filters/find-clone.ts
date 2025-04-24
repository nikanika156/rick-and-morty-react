import { IFilterValue } from '../../types/types'

// export const findClone = (arr: IFilterValue[], e: IFilterValue) =>
// 	arr.some(x => x.filterTitle == e.filterTitle && x.filterValue == e.filterValue)

export const findClone = (arr: string[], e: IFilterValue) => {
	if(arr.some(x => x == e.filterValue))return 'clone find!'
}
