import React from "react";
import Image from "next/image";

import { ChevronLeftIcon, Cross1Icon } from "@radix-ui/react-icons";

export default function Header({
  onBackClick,
  onCloseClick,
}: {
  onBackClick: () => void;
  onCloseClick: () => void;
}) {
  return (
    <div className="px-6 py-4 flex justify-between">
      <button onClick={onBackClick}>
        <ChevronLeftIcon width={32} height={32} />
      </button>
      <div>
        <Image src="/logo.svg" alt="Roast logo" width={112} height={32} />
      </div>
      <button onClick={onCloseClick}>
        <Cross1Icon width={28} height={28} />
      </button>
    </div>
  );
}
