import Image from "next/image";
import { useState } from "react";

import { Button } from "@repo/ui/components/ui/button";
import PlanItem from "../../plan-item";

import useTranslate from "~/hooks/use-translate";

import type { Plan } from "~/src/photo-app/types";

import messages from "./messages";

export default function PaywallScreen({
  plans,
  onCTAClick,
}: {
  plans: Plan[];
  onCTAClick: () => void;
}) {
  const [selectedPackageId, setSelectedPackageId] = useState(plans[0]?.id);
  const { t } = useTranslate();

  return (
    <div className="relative h-full w-full overflow-hidden">
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

      <div className="absolute h-full top-0 left-0 right-0 bottom-0 bg-primary/80"></div>

      <div className="absolute pb-[200px] h-full top-0 left-0 right-0 w-full flex flex-col items-center text-left px-6 py-4 overflow-y-auto">
    
        <div className="space-y-3 mt-4">
          <div className="uppercase font-bold text-4xl">
            {t(messages.header)}
          </div>
        </div>
        <div className="space-y-6 mt-6 w-full">
          {plans.map((item) => (
            <PlanItem
              key={item.id}
              item={item}
              isSelected={item.id === selectedPackageId}
              onClick={() => setSelectedPackageId(item.id)}
            />
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 space-y-4 bg-primary border-t border-border">
        <div className="text-xl text-center">{t(messages.oneTimePayment)}</div>
        <Button onClick={onCTAClick}>{t(messages.cta)}</Button>
        <div className="flex justify-center space-x-1">
          {[
            messages.itemSatisfaction,
            messages.itemTurnover,
            messages.itemRealistic,
          ]
            .map((item) => t(item))
            .join(" | ")}
        </div>
      </div>
    </div>
  );
}
