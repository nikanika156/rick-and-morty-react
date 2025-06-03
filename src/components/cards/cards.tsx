import { useEffect, useState } from "react";
import { ICards } from "../../types/types";
import { list } from "./cards.tailwind";
import { CardWithImage } from "../card/card-with-image/card-with-image";
import { ProgressCircle } from "../progress-circle/progress-circle";

interface Props {
  cards: ICards[];
}

export function Cards({ cards }: Props) {
  const [loadedCount, setLoadedCount] = useState(0);
  const [loading, setLoading] = useState(true);
// set loading
  useEffect(() => {
    if (cards.length && loadedCount >= cards.length) {
      setTimeout(() => {
        setLoading(false);
      }, 250);
    } else {
      setLoading(true);
    }
  }, [loadedCount]);
  // Preload images
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
    return () => {
      cancelled = true;
    };
  }, [cards]);

  return (
    <>
      <div className="w-full border-t-1 border-t-stone-500! py-10">
        {loading && (
          <div className="sticky top-1/2 z-9999 w-full translate-y-[-50%] bg-neutral-900">
            <ProgressCircle value={loadedCount} max={cards.length} />
            loading...
          </div>
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
