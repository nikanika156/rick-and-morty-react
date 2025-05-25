import { Funnel, RotateCw } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Props {
  showFilter: (isVisible: boolean) => void;
}
export function FilterButtons({ showFilter }: Props) {
  const filterFooter = useRef<HTMLDivElement>(null);
  const [filterIsVisible, setFilterIsVisible] = useState(false);

  // const filterOpenButton = useRef(null)
  const button =
    "flex items-center justify-center transition-all duration-500 rounded-xl outline-0 min-h-[55px] overflow-hidden min-w-30";

  const handleFilterVisible = () => {
    setFilterIsVisible((prev) => !prev);
  };
  const isVisible = ["w-full", "px-3", "p-3", "gap-3"];
  // const isNotVisible = ['h-10', 'bottom-[5%]', 'w-[150px]', 'rounded-xl']
  useEffect(() => {}, []);
  useEffect(() => {
    const resetButton = filterFooter.current?.firstChild as HTMLButtonElement;
    const filterOpenButton = filterFooter.current
      ?.lastChild as HTMLButtonElement;
    // isVisible.forEach(x => filterFooter.current?.classList.toggle(x, filterIsVisible))
    // filterFooter.current?.classList.toggle('w-full', filterIsVisible)
    // filterFooter.current?.classList.toggle('w-[130px]', !filterIsVisible)

    // resetButton.classList.toggle('w-[50%]', filterIsVisible)
    // resetButton.classList.toggle('w-0', !filterIsVisible)
    // filterOpenButton.classList.toggle('w-[50%]',filterIsVisible)
    // filterOpenButton.classList.toggle('w-[100%]', !filterIsVisible)
    // console.log(resetButton)

    //
    //
    // filterFooter.current?.classList.toggle('translate-y-[-30%]', !filterIsVisible)
    showFilter(filterIsVisible);
  }, [filterIsVisible]);
  return (
    <>
      <div
        ref={filterFooter}
        className="fixed right-[50%] bottom-0 z-999 box-border flex translate-x-[50%] gap-0 rounded-t-2xl bg-neutral-700 transition-all duration-500 ease-linear"
      >
        {/*  */}
        <button className={`reset-button ${button} bg-neutral-300`}>
          <RotateCw size={20} className="mr-0.5" />
          <p className="">clear filters</p>
        </button>
        {/*  */}
        <button
          onClick={handleFilterVisible}
          className={`filter-open-button ${button} bg-amber-500`}
        >
          <Funnel size={20} />
          <p className="ml-0.5">Filters</p>
        </button>
        {/*  */}
      </div>
      {/*  */}
      {/* </div> */}
    </>
  );
}
