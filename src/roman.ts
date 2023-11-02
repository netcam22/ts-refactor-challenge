import { ROM_NUM } from "../src/roman.types";

export function romanToDecimal(roman: string): number {
  //split - string to array - eg M C XC I
  const charArray = roman.split("");
  console.log(charArray);
  //reduce - turn MCXCU into M C XC I, adding values into new array
  //check if double, ie. this character and next character together is a roman numeral
  //check if previous value add next character to array, otherwise miss it
  const reducedArray = charArray.reduce(
    (
      romArray: Array<string>,
      char: string,
      i: number,
      charArray: Array<string>
    ): Array<string> => {
      const thisNumeral =
        i < charArray.length - 1 &&
        ROM_NUM[`${charArray[i]}${charArray[i + 1]}`]
          ? `${charArray[i]}${charArray[i + 1]}`
          : char;
      return romArray[i - 1] === undefined || romArray[i - 1].length === 1
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
