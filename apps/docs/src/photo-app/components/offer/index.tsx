import React, { useEffect, useState } from "react";

import { ClockIcon } from "@radix-ui/react-icons";

const getLabel = (value: number) => (value > 9 ? value : "0" + value);

const MINUTE = 60;
const HOUR = MINUTE * 60;

function Clock() {
  const [time, setTime] = useState(HOUR * 12);

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
    <div className="bg-gradient-to-r from-accent to-accent-gradient-to-light px-2 py-2 text-white flex items-center justify-between">
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
