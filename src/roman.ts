import { ROM_NUM } from "../src/roman.types";

export function romanToDecimal(roman: string): number {
  const charArray = roman
    .split("")
    .reduce(
      (
        romArray: Array<string>,
        char: string,
        i: number,
        charArray: Array<string>
      ): Array<string> => {
        // if this one and the next one combined make a double, don't count it
        // if this one and the previous one is a double, use this one and the previous one
        console.log(ROM_NUM[`${charArray[i - 1]}${char}`]);
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
    );
  console.log(charArray);
  // reduce again to count up values
  const decimal = charArray.reduce(
    (decCount: number, charString: string): number => {
      return (decCount += ROM_NUM[charString]);
    },
    0
  );
  console.log(decimal);
  return decimal;
}
