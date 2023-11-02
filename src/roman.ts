import { ROM_NUM } from "../src/roman.types";

export function romanToDecimal(roman: string): number {
  return roman
    .split("")
    .reduce(
      (
        romArray: Array<string>,
        char: string,
        i: number,
        charArray: Array<string>
      ): Array<string> => {
        const thisNumeral =
          i > 0 && ROM_NUM[`${charArray[i - 1]}${char}`]
            ? "skip"
            : ROM_NUM[`${char}${charArray[i + 1]}`]
            ? `${char}${charArray[i + 1]}`
            : char;
        return thisNumeral !== "skip"
          ? [...romArray, thisNumeral]
          : [...romArray];
      },
      []
    )
    .reduce((decCount: number, charString: string): number => {
      return (decCount += ROM_NUM[charString]);
    }, 0);
}
