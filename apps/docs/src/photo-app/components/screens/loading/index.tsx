import Image from "next/image";
import { useEffect } from "react";

import useTranslate from "~/hooks/use-translate";

import messages from "./messages";

import type { TempImage } from "~/src/photo-app/types";

export default function LoadingScreen({
  images,
  onFinish,
}: {
  images: TempImage[];
  onFinish: () => void;
}) {
  const { t } = useTranslate();

  const firstImage = images[0];

  useEffect(() => {
    setTimeout(() => {
      onFinish();
    }, 2000);
  }, []);

  return (
    <div className="relative h-full w-full flex items-center justify-center">
      {firstImage && (
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <Image
            src={firstImage.src}
            alt="Uploaded photo"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      )}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-primary/50"></div>
      <div className="absolute animate-[bar-move_2s_ease-in-out_forwards] left-0 right-0 h-[250px] bg-transparent border-t-[5px] w-full border-[#FF6032] shadow-[0_-125px_150px_-50px_#FF6032]" />
      <div className="uppercase font-bold text-4xl text-center z-10">
        <span>AI</span> {t(messages.processing)}...
      </div>
    </div>
  );
}
