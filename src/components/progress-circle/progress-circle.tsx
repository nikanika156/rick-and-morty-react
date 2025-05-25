import { useEffect, useState } from "react";

interface Props {
  max: number;
  value: number;
}
export function ProgressCircle({ max, value }: Props) {
  // const [maxPercent, setMaxPercent] = useState(Math.min(max * 100, 100))
  const [valuePercent, setValuePercent] = useState(
    Math.min((value / max) * 100, 100),
  );
  const [complete, setComplete] = useState(false);
  // let valuePercent = Math.min((value / max) * 100, 100)
  const maxPercent = Math.min(max * 100, 100);
  // console.log("maxPercent"+maxPercent)
  // console.log('valuePercent: ' + valuePercent)
  const checkProgress = () => {
    if (valuePercent == maxPercent) {
      setComplete(true);
    } else {
      setComplete(false);
    }
  };
  useEffect(() => {
    checkProgress();
  }, [value]);
  //
  useEffect(() => {
    setValuePercent(Math.min((value / max) * 100, 100));
  }, [value]);

  return (
    <div>
      <div className={`box-border flex h-10 w-150 bg-amber-400`}>
        <div
          style={{
            width: complete ? "0px" : valuePercent + "%",
            transition: "linear 0.1s",
          }}
          className={`mt-auto h-[50%] w-0 bg-amber-100/80 transition-all`}
        ></div>
      </div>
    </div>
  );
}
