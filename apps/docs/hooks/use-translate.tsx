export default function useTranslate() {
  return {
    t: (message: { index: string; defaultValue: string }) => {
      return message.defaultValue // TODO: in case if l18n
    },
  };
}
