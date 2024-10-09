import Image from "next/image";

import useTranslate from "~/hooks/use-translate";

import messages from "./messages";

import type { TempImage } from "~/src/photo-app/types";

export default function LoadingScreen({ images }: { images: TempImage[] }) {
  const { t } = useTranslate();

  const firstImage = images[0];

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
      <div className="uppercase font-bold text-4xl text-center z-10">
        {t(messages.processing)}...
      </div>
    </div>
  );
}
