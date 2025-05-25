import { useEffect, useState } from "react";
import { ICards } from "../../types/types";
import { list } from "./cards.tailwind";
import { CardWithImage } from "../card/card-with-image/card-with-image";

interface Props {
  cards: ICards[];
}

export function Cards({ cards }: Props) {
  const [loadedCount, setLoadedCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(loadedCount);

    if (cards.length && loadedCount >= cards.length) {
      setTimeout(() => {
        setLoading(false);
      }, 250);
    } else {
      setLoading(true);
    }
  }, [loadedCount]);
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setLoadedCount(0);
    cards?.forEach((card) => {
      const img = new Image();
      img.src = card.image;

      img.onload = () => {
        if (!cancelled)
          setTimeout(() => {
            setLoadedCount((prev) => prev + 1);
          }, 200);
      };
    });
// console.log(cards);

    // return () => {
    //   cancelled = true;
    // };
  }, [cards]);

  return (
    <>
      <div className="w-full border-t-1 border-t-stone-500! py-10">
        {loading ? (
          <div className="fixed top-[50%] left-[50%] z-9999 translate-x-[-50%] translate-y-[-50%] rounded-4xl bg-neutral-900 p-10 text-9xl">
            loading...
            <div
              className={`mt-10 h-10 w-[${cards.length}rem] max-w-[${cards.length}rem] box-border bg-neutral-600`}
            >
              <div
                style={{
                  width: loadedCount
                    ? (loadedCount / cards.length) * 100 + "%"
                    : "0px",

                  transition: `linear ${loadedCount > 0 ? "150ms" : "0ms"}`,
                }}
                className={`h-5 bg-amber-500 text-5xl`}
              >
                {/* {loadedCount} */}
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
        <ul className="grid max-lg:gap-x-5 max-lg:gap-y-5 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr] lg:gap-5 xl:grid-cols-[1fr_1fr_1fr_1fr]">
          {cards.map((card) => (
            <li key={card.id} className="flex">
              <CardWithImage
                name={card.name}
                origin={card.origin.name}
                species={card.species}
                image={card.image}
                loading={loading}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
