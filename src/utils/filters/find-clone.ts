import { IFilterValue } from "../../types/types";

export const findClone = (arr: string[], e: IFilterValue) =>
  arr.some((x) => x == e.filterValue);
