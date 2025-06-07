import { Check } from "lucide-react";
import "./custom-checkbox.css";

import { useDataContext } from "../../hooks/use-data-context";
import { ICards, IFilterValue } from "../../types/types";
import React from "react";

interface customCheckboxProps {
  name: string;
  htmlFor: string;
}

export const CustomCheckbox = React.memo(function CustomCheckbox({
  name,
  htmlFor,
}: customCheckboxProps) {
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
      <label className="flex min-w-0 items-center" form={`${name}-${htmlFor}`}>
        <input
          type="checkbox"
          id={`${name}-${htmlFor}`}
          name={name}
          value={htmlFor}
          className="old-checkbox peer hidden"
          onChange={inputOnChange}
        />

        <div className="custom-checkbox mr-1 flex h-5 w-5 items-center justify-center rounded-sm transition-colors duration-250">
          <Check
            size={16}
            strokeWidth={3}
            className="check-icon scale-0 transition-transform duration-250"
          />
        </div>
        <span className="truncate">{htmlFor}</span>
      </label>
    </>
  );
});
