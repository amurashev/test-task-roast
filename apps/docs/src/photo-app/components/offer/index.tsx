import React, { useEffect, useState } from "react";

import { ClockIcon } from "@radix-ui/react-icons";

const getLabel = (value: number) => (value > 9 ? value : "0" + value);

function Clock() {
  const [time, setTime] = useState(60 * 60 * 12);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timerInterval);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return (
    <span className="font-semibold">
      {getLabel(hours)}:{getLabel(minutes)}:{getLabel(seconds)}
    </span>
  );
}

export default function Offer() {
  const discount = 40;
  const buyers = 69;
  return (
    <div className="bg-gradient-to-r from-[#FF6B18] to-[#EF4014] px-2 py-2 text-white flex items-center justify-between">
      <div className="uppercase text-base font-semibold">
        {discount}% Off → first {buyers} buyers today!
      </div>
      <div className="flex items-center space-x-1">
        <ClockIcon width={20} height={20} />
        <Clock />
      </div>
    </div>
  );
}
