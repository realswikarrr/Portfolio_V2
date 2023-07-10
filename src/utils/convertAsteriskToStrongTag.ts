import theme from "@/data/theme";
import { MAP_COLOR_VARIANT_TO_TEXT } from "./mapVariants";

let style = MAP_COLOR_VARIANT_TO_TEXT[theme.colors.primary];

export default function convertAsteriskToStrongTag(str: string) {
  return str.replace(
    /\*{1,2}(.*?)\*{1,2}/g,
    `<strong className="font-normal ${style}">$1</strong>`
  );
}
