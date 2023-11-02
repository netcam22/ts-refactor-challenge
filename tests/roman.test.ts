import { romanToDecimal } from "../src/roman";
import { romanNumeralKey } from "../src/roman.types";

describe("test for empty string", () => {
  // Arrange
  const roman: string = "";
  const decimal: romanNumeralKey["key"] = 0;
  //Act/Assert
  test("convert empty string to be 0", () => {
    expect(romanToDecimal(roman)).toBe(decimal);
  });
});

describe("test simple conversion of single character numeral", () => {
  // Arrange
  const roman: string = "X";
  const decimal: romanNumeralKey["key"] = 10;
  //Act/Assert
  test("convert X in roman to 10 in decimal", () => {
    expect(romanToDecimal(roman)).toBe(decimal);
  });
  // Arrange/Act/Assert
  test("convert M in roman to 1000 in decimal", () => {
    expect(romanToDecimal("M")).toBe(1000);
  });
  test("convert I in roman to 1 in decimal", () => {
    expect(romanToDecimal("I")).toBe(1);
  });
  test("convert V in roman to 5 in decimal", () => {
    expect(romanToDecimal("V")).toBe(5);
  });
});

describe("test simple conversion of double character numeral", () => {
  // Arrange
  const roman: string = "XX";
  const decimal: romanNumeralKey["key"] = 20;
  //Act/Assert
  test("convert XX in roman to 20 in decimal", () => {
    expect(romanToDecimal(roman)).toBe(decimal);
  });
  // Arrange/Act/Assert
  test("convert IV in roman to 4 in decimal", () => {
    expect(romanToDecimal("IV")).toBe(4);
  });
  test("convert XL in roman to 40 in decimal", () => {
    expect(romanToDecimal("XL")).toBe(40);
  });
  test("convert CM in roman to 900 in decimal", () => {
    expect(romanToDecimal("CM")).toBe(900);
  });
});

describe("test conversion of numbers in 11-20 range", () => {
  // Arrange
  const roman: string = "XIX";
  const decimal: romanNumeralKey["key"] = 19;
  //Act/Assert
  test("convert XIX in roman to 19 in decimal", () => {
    expect(romanToDecimal(roman)).toBe(decimal);
  });
  // Arrange/Act/Assert
  test("convert XI in roman to 11 in decimal", () => {
    expect(romanToDecimal("XI")).toBe(11);
  });
  test("convert XII in roman to 12 in decimal", () => {
    expect(romanToDecimal("XII")).toBe(12);
  });
  test("convert XIII in roman to 13 in decimal", () => {
    expect(romanToDecimal("XIII")).toBe(13);
  });
  test("convert XIV in roman to 14 in decimal", () => {
    expect(romanToDecimal("XIV")).toBe(14);
  });
});

describe("test conversion of roman made with multiple numerals", () => {
  //Arrange
  const roman: string = "MCXCI";
  const decimal: romanNumeralKey["key"] = 1191;
  //Act Assert
  test("convert MCXCI in roman to 1191 in decimal", () => {
    expect(romanToDecimal(roman)).toBe(decimal);
  });
  test("convert CDLXXXV in roman to 485 in decimal", () => {
    expect(romanToDecimal("CDLXXXV")).toBe(485);
  });
  test("convert DLV in roman to 555 in decimal", () => {
    expect(romanToDecimal("DLV")).toBe(555);
  });
  test("convert MXXXIX in roman to 1039 in decimal", () => {
    expect(romanToDecimal("MXXXIX")).toBe(1039);
  });
  test("convert MMCDXCIV in roman to 2494 in decimal", () => {
    expect(romanToDecimal("MMCDXCIV")).toBe(2494);
  });

  test("convert MMCDXCIV in roman to 2999 in decimal", () => {
    expect(romanToDecimal("MMCMXCIX")).toBe(2999);
  });

  test("convert MMM in roman to 3000 in decimal", () => {
    expect(romanToDecimal("MMM")).toBe(3000);
  });

  test("convert CDXCIV in roman to 494 in decimal", () => {
    expect(romanToDecimal("CDXCIV")).toBe(494);
  });
});
