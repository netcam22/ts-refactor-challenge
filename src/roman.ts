import { ROM_NUM } from "../src/roman.types";

export function romanToDecimal(roman: string): number {
  //split - string to array - eg M C X C I
  const charArray = roman.split("");
  console.log(charArray);
  //reduce - turn MCXCU into M C XC I, adding values into new array
  //check if double, ie. this character and next character together is a roman numeral
  //check if previous value is single add next character to array, otherwise miss it
  const reducedArray = charArray.reduce(
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
  console.log(reducedArray);
  // reduce again to count up values
  const decimal = reducedArray.reduce(
    (decCount: number, charString: string): number => {
      return (decCount += ROM_NUM[charString]);
    },
    0
  );
  console.log(decimal);
  return decimal;
}
