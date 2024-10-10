import Image from "next/image";

import { Button } from "@repo/ui/components/ui/button";

import useTranslate from "~/hooks/use-translate";
import { getImageAsDataURL } from "~/utils/media";

import messages from "./messages";

const ALLOWED_FILES_TYPES = ["image/png", "image/jpeg", "image/heic"];

export default function UploadScreen({
  onFinish,
}: {
  onFinish: (images: { src: string }[]) => void;
}) {
  const { t } = useTranslate();

  const onFileChange = async (event: React.FormEvent<HTMLInputElement>) => {
    const files = [
      ...(event.target as EventTarget & { files: FileList }).files,
    ];

    const convertedImages = await Promise.all(
      files.map(async (file) => {
        return {
          src: (await getImageAsDataURL(file)) as string,
        };
      }),
    );

    onFinish(convertedImages);
  };

  return (
    <div className="relative h-full w-full flex flex-col">
      <div className="w-full flex flex-col items-center text-left px-6 py-4 pt-8 z-10">
        <div className="space-y-2">
          <div className="uppercase font-bold text-4xl">
            {t(messages.header)}
          </div>
          <div className="text-xl">{t(messages.text)}</div>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 bottom-0">
        <Image
          src="/ai_generated_photo.png"
          alt="AI generated photo"
          width={356}
          height={470}
          style={{
            objectFit: "contain",
          }}
          className="w-full"
        />
      </div>

      <input
        id="addFile"
        onChange={onFileChange}
        type="file"
        name="files[]"
        accept={ALLOWED_FILES_TYPES.join()}
        multiple
        className="w-full h-full hidden"
      />

      <div className="fixed bottom-0 left-0 right-0 px-4 w-full pb-4 z-10">
        <Button
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("addFile");
            el?.click();
          }}
        >
          {t(messages.cta)}
        </Button>
      </div>
    </div>
  );
}
