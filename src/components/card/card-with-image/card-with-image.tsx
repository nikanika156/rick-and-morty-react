import React from "react";


interface Props {
  name: string;
  origin: string;
  species: string;
  image: string;
  loading?: boolean;
}

export const CardWithImage = React.memo(function CardWithImage({
  origin,
  name,
  species,
  image,
}: Props) {
  return (
    <>


      <div
        className={`flex flex-1 overflow-hidden rounded-2xl bg-neutral-700 lg:w-[175px] lg:flex-col`}
      >
        <div className="flex aspect-square flex-1/3 items-center rounded-xl lg:min-w-[175px]">
          <img
            key={image}
            src={image}
            alt={name}
            className="aspect-square w-full min-w-25 object-cover!"
          />
        </div>

        <div className={`flex min-w-0 flex-2/3 flex-col p-3 pt-1.5`}>
          <p className={`truncate font-bold text-neutral-400`}>{species}</p>
          <h1 className={`truncate font-bold`}>{name}</h1>
          <p className={`truncate`} title={origin}>
            {origin}
          </p>
        </div>
      </div>
    </>
  );
});
