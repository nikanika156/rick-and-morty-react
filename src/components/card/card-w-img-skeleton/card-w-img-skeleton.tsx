import React from "react";

export const CardWithImgSkeleton = React.memo(function CardWithImgSkeleton() {
  return (
    <div
      className={`flex flex-1 overflow-hidden rounded-2xl bg-neutral-700 lg:w-[175px] lg:flex-col`}
    >
      <div className="aspect-square w-full flex-1/3 animate-pulse bg-neutral-400 lg:min-w-[175px] lg:rounded-t-xl"></div>

      <div className={`flex min-w-0 flex-2/3 flex-col gap-3 p-3 pt-3 lg:pt-3`}>
        <p className={`h-3.5 w-full animate-pulse rounded bg-neutral-400`}></p>
        <p className={`h-3.5 w-full animate-pulse rounded bg-neutral-400`}></p>
        <p className={`h-3.5 w-full animate-pulse rounded bg-neutral-400`}></p>
      </div>
    </div>
  );
});
