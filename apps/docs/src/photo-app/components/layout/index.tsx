import React from "react";

import { Progress } from "@repo/ui/components/ui/progress";

import Header from "../header";
import Offer from "../offer";

export default function Layout({
  children,
  hasHeader,
  hasProgress,
  hasOffer,
  progress,
  onBackClick,
  onCloseClick,
}: {
  children: React.ReactNode;
  hasHeader: boolean;
  hasProgress: boolean;
  hasOffer: boolean;
  progress: number;
  onBackClick: () => void;
  onCloseClick: () => void;
}) {
  return (
    <div className="bg-foreground text-white h-[100vh] flex flex-col overflow-hidden">
      {hasHeader && (
        <Header onBackClick={onBackClick} onCloseClick={onCloseClick} />
      )}
      {hasProgress && <Progress value={progress * 25} />}
      {hasOffer && <Offer />}
      <div className="h-full flex-grow">{children}</div>
    </div>
  );
}
