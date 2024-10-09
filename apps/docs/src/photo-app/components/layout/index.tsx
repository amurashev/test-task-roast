import React from "react";

import { Progress } from "@repo/ui/components/ui/progress";

import Header from "../header";

export default function Layout({
  children,
  hasHeader,
  hasProgress,
  progress,
  onBackClick,
  onCloseClick,
}: {
  children: React.ReactNode;
  hasHeader: boolean;
  hasProgress: boolean;
  progress: number;
  onBackClick: () => void;
  onCloseClick: () => void;
}) {
  return (
    <div className="bg-foreground text-white h-[100vh] flex flex-col">
      {hasHeader && (
        <Header onBackClick={onBackClick} onCloseClick={onCloseClick} />
      )}
      {hasProgress && <Progress value={progress * 25} />}
      <div className="h-full flex-grow">{children}</div>
    </div>
  );
}
