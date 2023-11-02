import {
  ROM_NUM_SINGLE,
  ROM_NUM_DOUBLE,
  ROM_NUM,
  romanSingleKey,
  romanDoubleKey,
  romanNumeralKey
} from "../src/roman.types";

export function romanToDecimal(roman: string): number {
  const myValue: romanNumeralKey[string] = ROM_NUM[roman];
  return myValue;
}
