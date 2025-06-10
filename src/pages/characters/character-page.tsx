import { useEffect, useMemo, useState } from "react";
import { Cards } from "../../components/cards/cards";
import { Filters } from "../../components/filters/filters";
import {
  FiltersAndCards,
  ICards,
  IFilters,
  IFilterValue,
} from "../../types/types";
import { GetData } from "../../utils/get-data/get-data";
import { DataContext } from "../../hooks/context/use-data-context";

import { deleteClone } from "../../utils/filters/delete-clone";
import { PageBtns } from "../../components/page-btns/page-btns";
import { HitsPerPage } from "../../components/hits-per-page/hits-per-page";
// import { FiltersMobile } from '../../components/filters-mobileview/filters.mobile'

//
//
export function CharactersPage() {
  const [filtersAndCardArr, setFiltersAndCardArr] = useState<FiltersAndCards>({
    filter: [],
    cards: [],
  });
  const [filtersObj, setFiltersObj] = useState<IFilters>({
    gender: [],
    status: [],
    origin: [],
    species: [],
  });

  const [filteredCards, setFilteredCards] = useState<ICards[]>([]);
  const [hitsPerPage, setHitsPerPage] = useState(16);
  const [page, setPage] = useState(1);
  // const checkFilters = Object.entries(filtersObj).some((x) => x[1].length);
  // const cards = checkFilters ? filteredCards : filtersAndCardArr;
  const cards = filteredCards.length ? filteredCards : filtersAndCardArr.cards;
  const PageCount = Math.ceil(cards.length / hitsPerPage);
  // const paginated = cards.slice(
  //   hitsPerPage * page - hitsPerPage,
  //   hitsPerPage * page,
  // );
  const paginated = useMemo(
    () => cards.slice(hitsPerPage * page - hitsPerPage, hitsPerPage * page),
    [cards, hitsPerPage, page],
  );

  const handleFilterChange = (e: IFilterValue) => {
    const key = e.filterTitle.toLowerCase() as keyof IFilters;
    if (filtersObj[key]!.includes(e.filterValue)) {
      setFiltersObj((prev) => ({
        ...prev,
        [key]: [...deleteClone(prev[key], e.filterValue)],
      }));
    } else {
      setFiltersObj((prev) => ({
        ...prev,
        [key]: [...prev[key], e.filterValue],
      }));
    }
  };
  const filterCards = () => {
    const arr = filtersAndCardArr.cards.filter((card) => {
      const genderFilter = filtersObj.gender.length
        ? filtersObj.gender.includes(card.gender)
        : true;
      const statusFilter = filtersObj.status.length
        ? filtersObj.status.includes(card.status)
        : true;
      const speciesFilter = filtersObj.species.length
        ? filtersObj.species.includes(card.species)
        : true;
      const originFilter = filtersObj.origin.length
        ? filtersObj.origin.includes(card.origin.name)
        : true;

      return speciesFilter && statusFilter && genderFilter && originFilter;
    });
    setPage(1);
    setFilteredCards(arr);
  };
  useEffect(() => {
    GetData().then((x) => setFiltersAndCardArr(x));
  }, []);
  useEffect(() => {
    // console.log(filterCards());
  }, [cards]);
  useEffect(() => {
    filterCards();
    // console.log(filtersObj);
  }, [filtersObj]);
  return (
    <>
      <div className="lg:-gap-0 flex gap-10">
        <DataContext.Provider value={{ sendData: handleFilterChange }}>
          <Filters filters={filtersAndCardArr!.filter} />
        </DataContext.Provider>
        <div className="character-main flex flex-1 flex-col items-center">
          <header className="flex h-20 w-full items-center">
            <h1 className="text-2xl font-semibold">Character</h1>
            <div className="ml-auto">
              <HitsPerPage sendData={(e: number) => setHitsPerPage(e)} />
            </div>
          </header>
          <PageBtns
            lastPage={PageCount}
            page={page}
            sendData={(page: number) => setPage(page)}
          />
          <Cards cards={paginated} />
        </div>
      </div>
    </>
  );
}

