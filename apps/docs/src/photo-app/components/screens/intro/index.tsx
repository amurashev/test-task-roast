import Image from "next/image";

import { Button } from "@repo/ui/components/ui/button";

import useTranslate from "~/hooks/use-translate";

import messages from "./messages";

export default function IntroScreen({
  onCTAClick,
}: {
  onCTAClick: () => void;
}) {
  const { t } = useTranslate();

  return (
    <div className="relative h-full w-full">
      <div className="absolute top-0 w-full left-0 right-0">
        <Image
          src="/photos_bg.png"
          alt="Background"
          className="mx-auto"
          width={644}
          height={682}
          style={{
            objectFit: "fill",
          }}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full flex flex-col items-center text-center px-6 py-4 bg-primary shadow-[0_-80px_70px_30px_rgba(21,25,28,1)]">
        <div>
          <Image src="/logo.svg" alt="Roast logo" width={112} height={32} />
        </div>
        <div className="space-y-3 mt-4">
          <div className="uppercase font-bold text-4xl">
            {t(messages.header)}
          </div>
          <div className="text-xl">{t(messages.text)}</div>
        </div>

        <div className="px-4 w-full mt-24">
          <Button onClick={onCTAClick}>{t(messages.cta)}</Button>
        </div>
      </div>
    </div>
  );
}
