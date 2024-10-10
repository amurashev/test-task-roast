import { CheckIcon } from "@radix-ui/react-icons";

import { Plan } from "~/src/photo-app/types";
import Price from "@repo/ui/components/l18n/price";

import { cn } from "~/utils/styles";
import useTranslate from "~/hooks/use-translate";

import messages from "./messages";

function Tag({
  text,
  type = "regular",
}: {
  text: string;
  type: "regular" | "active";
}) {
  return (
    <div
      className={cn(
        "absolute top-0 translate-y-[-50%] right-4 p-1 px-2 text-primary rounded-lg font-bold",
        {
          "bg-gradient-to-r from-[#FF6B18] to-[#EF4014] p-1 px-2 text-white":
            type === "active",
          "bg-white": type === "regular",
        },
      )}
    >
      {text}
    </div>
  );
}

export default function PlanItem({
  item,
  isSelected,
  onClick,
}: {
  isSelected: boolean;
  item: Plan;
  onClick: () => void;
}) {
  const { t } = useTranslate();
  return (
    <div
      className={cn("relative p-6 rounded-2xl w-full cursor-pointer", {
        "border-[rgb(60,71,78)] border bg-[#2E3438]": !isSelected,
        "border-[#FF9518] border-2 bg-[#450C05]": isSelected,
      })}
      onClick={onClick}
    >
      {item.isPopular && <Tag type="regular" text={t(messages.mostPopular)} />}
      {item.isBest && <Tag type="active" text={t(messages.best)} />}

      <div className="flex items-center space-x-3">
        <div
          className={cn(
            "w-[24px] h-[24px] border-2 border-border rounded-full flex-shrink-0 flex items-center justify-center",
            {
              "border-[#3C474E]": !isSelected,
              "border-[#FF9518]": isSelected,
            },
          )}
        >
          {isSelected && (
            <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
          )}
        </div>
        <div className="uppercase font-semibold text-xl flex-grow">
          {item.title}
        </div>
        <div className="flex items-center space-x-1">
          {item.oldPrice && (
            <div
              className={cn("uppercase font-semibold text-base line-through ", {
                "text-[#76919A]": !isSelected,
                "text-[#BE7B4D]": isSelected,
              })}
            >
              <Price value={item.oldPrice} />
            </div>
          )}
          <div className="uppercase font-semibold text-xl">
            <Price value={item.price} />
          </div>
        </div>
      </div>

      {Boolean(item.features?.length) && isSelected && (
        <div className="mt-2 space-y-2">
          {item.features?.map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <CheckIcon width={24} height={24} /> {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
