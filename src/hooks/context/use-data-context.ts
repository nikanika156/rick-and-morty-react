// DataContext.tsx
import { createContext, useContext } from "react";
import { IFilterValue } from "../../types/types";
type DataContextType = {
  sendData: ({}: IFilterValue) => void;
};

export const DataContext = createContext<DataContextType>({
  sendData: () => {},
});

export const useFilterContext = () => useContext(DataContext);
