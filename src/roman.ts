import { ROM_NUM } from "../src/roman.types";

export function romanToDecimal(roman: string): number {
  return roman
    .split("")
    .reduce(
      (
        decimalCount: number,
        char: string,
        i: number,
        charArray: Array<string>
      ): number =>
        i > 0 && ROM_NUM[`${charArray[i - 1]}${char}`]
          ? decimalCount
          : ROM_NUM[`${char}${charArray[i + 1]}`]
          ? (decimalCount += ROM_NUM[`${char}${charArray[i + 1]}`])
          : (decimalCount += ROM_NUM[char]),
      0
    );
}
