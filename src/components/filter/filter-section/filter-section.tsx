import { TFilterValue } from "../../../types/types";
import { CustomCheckbox } from "../../custom-checkbox/custom-checkbox";

import { localSearch } from "../../../services/search/search.service";
import { Input } from "../../input/input";
import { useState } from "react";

interface filterSectionProps {
  list?: TFilterValue;
}

export function FilterSection({ list }: filterSectionProps) {
  const [searchInput, setSearchInput] = useState("");
  const filteredItems = localSearch(searchInput, list?.filters);
  const isBigArray = list?.filters && list?.filters.length >= 15;
  // window.addEventListener('resize', () => {

  // })

  return (
    <>
      <div className="border-t-1 border-t-stone-500 pb-10">
        <header className="flex h-12.5 items-center">
          <h1 className="mt-1 text-xl font-semibold">{list?.sectionName}</h1>
        </header>
        <div>
          {isBigArray && (
            <div className="py-3">
              <Input getValue={(data) => setSearchInput(data)} />
            </div>
          )}

          <ul className="scrollbar grid max-h-80 min-w-0 overflow-y-auto max-[900px]:grid-cols-2 max-[30rem]:grid-cols-1">
            {filteredItems?.map((filter, id) => (
              <li
                className="flex-1 overflow-x-hidden py-1"
                key={`${filter}-${id}`}
              >
                <CustomCheckbox name={list?.sectionName!} htmlFor={filter} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
