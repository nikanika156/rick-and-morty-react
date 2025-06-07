import React from "react";

interface Props {
  sendData: (e: number) => void;
}
export const HitsPerPage = React.memo(function HitsPerPage({
  sendData,
}: Props) {
  const Hits = [16, 32, 64];

  return (
    <>
      <select
        name="hits per page"
        id=""
        onChange={(e) => sendData(parseInt(e.target.value))}
      >
        {Hits.map((hit) => (
          <option key={hit} value={hit}>
            {hit} Hits per page
          </option>
        ))}
      </select>
    </>
  );
});
