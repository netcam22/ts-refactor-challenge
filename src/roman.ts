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
      ): number =>
        i > 0 && ROM_NUM[`${charArray[i - 1]}${char}`]
          ? decCount
          : ROM_NUM[`${char}${charArray[i + 1]}`]
          ? (decCount += ROM_NUM[`${char}${charArray[i + 1]}`])
          : (decCount += ROM_NUM[char]),
      0
    );
}
