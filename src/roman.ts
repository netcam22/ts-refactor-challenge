import { ROM_NUM } from "../src/roman.types";

export function romanToDecimal(roman: string): number {
  return roman
    .split("")
    .reduce(
      (
        decCount: number,
        char: string,
        i: number,
        charArray: Array<string>
      ): number => {
        const thisNumeral =
          i > 0 && ROM_NUM[`${charArray[i - 1]}${char}`]
            ? "skip"
            : ROM_NUM[`${char}${charArray[i + 1]}`]
            ? `${char}${charArray[i + 1]}`
            : char;
        return thisNumeral !== "skip"
          ? (decCount += ROM_NUM[thisNumeral])
          : decCount;
      },
      0
    );
}
