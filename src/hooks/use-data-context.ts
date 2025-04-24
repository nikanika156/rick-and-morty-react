// DataContext.tsx
import { createContext, useContext } from 'react'
import { IFilters, IFilterValue } from '../types/types'
type DataContextType = {
	sendData: ({}:IFilterValue) => void
}

export const DataContext = createContext<DataContextType>({
	sendData: () => {},
})

export const useDataContext = () => useContext(DataContext)
