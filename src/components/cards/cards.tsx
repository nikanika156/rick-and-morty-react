import { useEffect, useState } from "react";
import { ICards } from "../../types/types";

import { CardWithImage } from "../card/card-with-image/card-with-image";

import { CardWithImgSkeleton } from "../card/card-w-img-skeleton/card-w-img-skeleton";

interface Props {
  cards: ICards[];
}

export function Cards({ cards }: Props) {
  const [loading, setLoading] = useState(true);

  const preloadPromise = (image: string) => {
    return new Promise<string>((resolve) => {
      const img = new Image();
      img.src = image;
      if (img.complete) resolve("cache");
      else
        img.onload = () => {
          resolve("loaded");
        };
    });
  };

  const preloadImage = async () => {
    setLoading(true);
    const results = await Promise.all(
      cards.map(({ image }) => preloadPromise(image)),
    );
    results.forEach((status) => console.log(status));
    return results;
  };

  useEffect(() => {
    if (cards.length)
      preloadImage().then((x) => {
        if (x.find((x) => x == "loaded")) {
          setTimeout(() => {
            setLoading(false);
          }, 250);
        } else if (x.every((x) => x == "cache") && x.length >= cards.length) {
          setLoading(false);
        }
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
                  image={!loading && card.image}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
