import { romanToDecimal } from "../src/roman";
import { romanNumeralKey } from "../src/roman.types";

describe("test simple conversion of single numeral", () => {
  // Arrange
  const roman: string = "X";
  const decimal: romanNumeralKey["key"] = 10;
  //Act/Assert
  test("convert X in roman to 10 in decimal", () => {
    expect(romanToDecimal(roman)).toBe(decimal);
  });
});
