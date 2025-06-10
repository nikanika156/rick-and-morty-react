import { RotateCw } from "lucide-react";

import { TFilterValue } from "../../types/types";
import { FilterSection } from "../filter/filter-section/filter-section";
import { useEffect, useRef, useState } from "react";
import { getWindowWidth } from "../../utils/get-window-width/get-window-width";
import {
  desktopView,
  hideMobileFilterWindow,
  mobileView,
} from "./filter.tailwind";
import { FilterButtons } from "../filter/filter-buttons/filter-buttons";
import React from "react";

interface Props {
  filters: TFilterValue[];
}
export const Filters = React.memo(function Filters({ filters }: Props) {
  window.addEventListener(
    "resize",
    () => (getWindowWidth() ? setIsMobile(true) : setIsMobile(false)),
    // window.removeEventListener('resize',()=>{})
  );
  const [isMobile, setIsMobile] = useState(false);
  const [filterIsVisible, setFilterIsVisible] = useState(false);
  const filterWindow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", filterIsVisible);

    filterWindow.current!.classList.toggle(
      hideMobileFilterWindow,
      !filterIsVisible,
    );
  }, [filterIsVisible]);
  useEffect(() => {
    filterWindow.current!.classList.toggle(hideMobileFilterWindow, isMobile);
  }, [isMobile]);
  useEffect(() => {
    setIsMobile(getWindowWidth());
  }, []);
  return (
    <>
      {/* <div className=' bottom-0'> */}
      <FilterButtons showFilter={(e: boolean) => setFilterIsVisible(e)} />

      {/* </div> */}

      <div
        ref={filterWindow}
        className={`${isMobile ? `${mobileView} bg-amber-100` : desktopView} `}
      >
        <header className={`flex h-20 min-h-0 items-center justify-between`}>
          <h1 className="text-2xl font-semibold">Filters</h1>
          <div className="">
            <button className="flex items-center outline-0">
              <RotateCw className="mr-0.5 w-4" />
              clear filters
            </button>
          </div>
        </header>

        <div
          className={`h-[calc(100%_-_80px)] overflow-scroll overflow-x-hidden pb-20 lg:h-fit`}
        >
          {filters?.map((filterSection) => (
            <FilterSection
              key={filterSection.sectionName}
              list={filterSection}
            />
          ))}
        </div>
      </div>
    </>
  );
});
