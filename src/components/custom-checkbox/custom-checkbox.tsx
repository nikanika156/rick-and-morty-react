import { Check } from "lucide-react";
import "./custom-checkbox.css";

import { useDataContext } from "../../hooks/use-data-context";
import { ICards, IFilterValue } from "../../types/types";

interface customCheckboxProps {
  name: string;
  htmlFor: string;
}

export function CustomCheckbox({ name, htmlFor }: customCheckboxProps) {
  const { sendData } = useDataContext();
  const inputOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const forSend: IFilterValue = {
      filterTitle: target.name.toLowerCase() as keyof ICards,
      filterValue: target.value,
    };
    sendData(forSend);
  };
  return (
    <>
      <label
        htmlFor={`${name}-${htmlFor}`}
        className="flex min-w-0 items-center"
      >
        <input
          hidden
          id={`${name}-${htmlFor}`}
          type="checkbox"
          value={htmlFor}
          name={name}
          onChange={inputOnChange}
          className="old-checkbox"
        />
        <div className="custom-checkbox mr-2 flex h-5 w-5 items-center justify-center rounded bg-stone-500 transition">
          <Check size={15} strokeWidth={4} className="check-icon transition" />
        </div>
        <span className="truncate">{htmlFor}</span>
      </label>
    </>
  );
}
