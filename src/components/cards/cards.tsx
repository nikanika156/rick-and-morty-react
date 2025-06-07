import { useEffect, useState } from "react";
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
  const [loadedCount, setLoadedCount] = useState(0);
  const [loading, setLoading] = useState(false);

  // set loading
  useEffect(() => {
    if (cards.length && Math.min(loadedCount, cards.length) == cards.length) {
      setTimeout(() => {
        setLoading(false);
      }, 250);
    } else {
      setLoading(true);
    }
  }, [loadedCount]);
  // Preload images
  // useEffect(() => {
  //   let cancelled = false;

  //   setLoadedCount(0);
  //   setIsLoaded(
  //     cards.some((card) => {
  //       const img = new Image();
  //       img.src = card.image;
  //       return img.complete;
  //     }),
  //   );
  //   // if (!cancelled)
  //   cards?.forEach((card) => {
  //     const img = new Image();
  //     img.src = card.image;
  //     img.onload = () => {
  //       setTimeout(() => {
  //         if (!cancelled) {
  //           setLoadedCount((prev) => prev + 1);
  //         }
  //       }, 200);
  //     };
  //   });

  //   return () => {
  //     cancelled = true;
  //   };
  // }, [cards]);
  useEffect(() => {
    let cancelled = false;
    setLoadedCount(0);

    const preloadImage = (src: string) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.src = src;

        if (img.complete) {
          resolve();
        } else {
          img.onload = () => resolve();
        }
      });

    Promise.all(cards.map((card) => preloadImage(card.image))).then((x) => {
      console.log(x);

      if (!cancelled) {
        setLoading(false);
      }
    });

    cards.forEach((card) => {
      const img = new Image();
      img.src = card.image;
      if (img.complete) {
        setLoadedCount((prev) => prev + 1);
      } else {
        img.onload = () => {
          if (!cancelled) {
            setLoadedCount((prev) => prev + 1);
          }
        };
      }
    });

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
