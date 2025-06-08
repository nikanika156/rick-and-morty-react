import { useEffect, useRef, useState } from "react";
import { ICards } from "../../types/types";

import { CardWithImage } from "../card/card-with-image/card-with-image";

import { CardWithImgSkeleton } from "../card/card-w-img-skeleton/card-w-img-skeleton";

interface Props {
  cards: ICards[];
}

export function Cards({ cards }: Props) {
  const [loadedCount, setLoadedCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [inCache, setInCache] = useState(false);
  const cancelled = useRef(false);
  // set loading
  // useEffect(() => {
  //   if (cards.length && Math.min(loadedCount, cards.length) == cards.length) {
  //     setTimeout(() => {
  //       // loading.current = false;
  //       setLoading(false);
  //     }, 250);
  //   } else {
  //     // loading.current = true;
  //     setLoading(true);
  //   }
  //   console.log(loadedCount);
  // }, [loadedCount]);
  //
  // Preload images
  //
  const preloadImage = async () => {
    let cached = false;
    let loaded = false;
    let countInCache = 0;
    setLoadedCount(0);
    setLoading(true);

    cards.map(({ image }) => {
      const xml = new XMLHttpRequest();
      xml.open("GET", image);
      xml.responseType = "blob";

      // if (xml.) {
      xml.onloadend = (x) => {
        console.log((countInCache += 1));
      };
      xml.onload = function(e){
        console.log(e);
        
      }
      // } else {
      //   xml.onload = () => {
      //     setLoadedCount((prev) => prev + 1);
      //   };
      // }
    });

    return {
      cached: cached,
      loaded: loaded,
    };
  };
  useEffect(() => {
    preloadImage().then((x) => {
      console.log(x);
    });
  }, [cards]);

  return (
    <>
      <div className="w-full border-t-1 border-t-stone-500! py-10">
        <ul className="grid max-lg:gap-x-5 max-lg:gap-y-5 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr] lg:gap-5 xl:grid-cols-[1fr_1fr_1fr_1fr]">
          {cards.map((card) => (
            <li key={card.id} className="flex">
              {loading ? (
                <CardWithImgSkeleton />
              ) : (
                <CardWithImage
                  name={card.name}
                  origin={card.origin.name}
                  species={card.species}
                  image={card.image}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
