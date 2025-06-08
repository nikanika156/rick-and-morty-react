import { useEffect, useRef, useState } from "react";
import { ICards } from "../../types/types";
import { list } from "./cards.tailwind";
import { CardWithImage } from "../card/card-with-image/card-with-image";
import { ProgressCircle } from "../progress-circle/progress-circle";
import { CardWithImgSkeleton } from "../card/card-w-img-skeleton/card-w-img-skeleton";
import React from "react";

interface Props {
  cards: ICards[];
}

export function Cards({ cards }: Props) {
  // const [loadedCount, setLoadedCount] = useState(0);
  // const loadedCount = useRef(0);
  let loadedCount = 0;
  // const [loading, setLoading] = useState(false);
  const loading = useRef(true);

  // set loading
  useEffect(() => {
    if (cards.length && Math.min(loadedCount, cards.length) == cards.length) {
      setTimeout(() => {
        loading.current = false;
        // setLoading(false);
      }, 250);
    } else {
      loading.current = true;
      // setLoading(true);
    }
    console.log(loadedCount);
  }, [loadedCount]);
  //
  // Preload images
  //

  useEffect(() => {
    let cancelled = false;
    // setLoadedCount(0);
    loadedCount = 0;

    cards.map(({ image }) => {
      const Img = new Image();
      Img.src = image;

      if (Img.complete) {
        console.log(image);
      } else {
        Img.onload = () => {
          loadedCount += 1;
        };
      }
    });

    //

    //
    return () => {
      cancelled = true;
    };
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
