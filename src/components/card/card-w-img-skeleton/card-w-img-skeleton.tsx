interface Props {
  className?: string;
  loading?: boolean;
}

export function CardWithImgSkeleton({ loading, className }: Props) {
  return (
    <div
      className={`${!loading&&'hidden'} flex flex-1 overflow-hidden rounded-2xl bg-neutral-700 lg:w-[175px] lg:flex-col`}
    >
      <div className="aspect-square w-full flex-1/3 animate-pulse lg:rounded-t-xl bg-neutral-400 lg:min-w-[175px]"></div>

      <div
        className={`flex min-w-0 flex-2/3 flex-col p-3 pt-3 lg:pt-3 gap-3 `}
      >
        <p className={`h-3.5 w-full animate-pulse bg-neutral-400 rounded`}> </p>
        <p className={`h-3.5 w-full animate-pulse bg-neutral-400 rounded`}> </p>
        <p className={`h-3.5 w-full animate-pulse bg-neutral-400 rounded`}> </p>
      </div>
    </div>
  );
}
