// import { Key } from 'lucide-react'

interface Props {
  page: number;
  lastPage: number;
  sendData: (page: number) => void;
}

export function PageBtns({ page, lastPage, sendData }: Props) {
  let startPage = 1;
  const buttonQuantity = lastPage < 5 ? lastPage : 5;
  if (page <= 2) {
    startPage = 1;
  } else if (page >= lastPage - 1) {
    startPage = Math.max(1, lastPage - 4);
  } else {
    startPage = page - 2;
  }
  // window.scrollTo({ top: 0, behavior: 'smooth' })

  const pages = Array.from({ length: buttonQuantity }, (_, i) => startPage + i);
  const handlePageChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    sendData(parseInt(e.currentTarget.innerText));
    // setTimeout(() => {
    // 	window.scrollTo({ top: 0, behavior: 'smooth' })
    // }, 0)
  };

  return (
    <>
      <div className="flex gap-2">
        {pages.map((button, key) =>
          button == page ? (
            <button
              key={key}
              className="h-10 w-10 bg-amber-500! transition-all hover:bg-amber-600!"
              onClick={handlePageChange}
            >
              {button}
            </button>
          ) : (
            <button
              key={key}
              className="pretty-btn h-10 w-10 hover:bg-amber-600!"
              onClick={handlePageChange}
            >
              {button}
            </button>
          ),
        )}
      </div>
    </>
  );
}
