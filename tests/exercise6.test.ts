import {
  sumDigits,
  createRange,
  getScreentimeAlertList
} from "../src/exercise6";

const nullValue: unknown = undefined;

describe("sumDigits", () => {
  test("Throws an error if not passed n parameter", () => {
    expect(() => {
      sumDigits(nullValue as number);
    }).toThrow("n is required");
  });

  test("Throws an error if n is a string", () => {
    expect(() => {
      sumDigits("Hello" as any);
    }).toThrow("n should be integer of datatype number");
  });

  test("Throws an error if n is an array", () => {
    expect(() => {
      sumDigits(["1", "2"] as any);
    }).toThrow("n should be integer of datatype number");
  });

  test("sums of digits", () => {
    expect(sumDigits(123456789)).toBe(45);
    expect(sumDigits(346789100)).toBe(38);
    expect(sumDigits(65466)).toBe(27);
  });

  test("sums of digits from negative numbers", () => {
    expect(sumDigits(-123456789)).toBe(45);
    expect(sumDigits(-346789100)).toBe(38);
    expect(sumDigits(-65466)).toBe(27);
  });

  test("test for zero", () => {
    expect(sumDigits(0)).toBe(0);
  });

  test("test for single digit", () => {
    expect(sumDigits(5)).toBe(5);
  });
});

describe("createRange", () => {
  test("Throws an error if not passed any parameters", () => {
    expect(() => {
      createRange(
        nullValue as number,
        nullValue as number,
        nullValue as number
      );
    }).toThrow("start and end are required");
  });

  test("End is required", () => {
    expect(() => {
      createRange(1, nullValue as number, nullValue as number);
    }).toThrow("end is required");
  });

  test("Range without step parameter", () => {
    expect(createRange(3, 11, nullValue as number)).toStrictEqual([
      3, 4, 5, 6, 7, 8, 9, 10, 11
    ]);
  });

  test("Range with positive numbers", () => {
    expect(createRange(3, 11, 2)).toStrictEqual([3, 5, 7, 9, 11]);
  });

  test("Range with negative numbers", () => {
    expect(createRange(-5, -20, -3)).toStrictEqual([
      -5, -8, -11, -14, -17, -20
    ]);
  });

  test("Range starting with 0", () => {
    expect(createRange(0, 100, 10)).toStrictEqual([
      0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
    ]);
  });
});
import { screenUser } from "../src/exercise6.types";

describe("getScreentimeAlertList", () => {
  test("Throws an error if parameter users not passed", () => {
    expect(() => {
      getScreentimeAlertList(nullValue as Array<screenUser>, "2019-05-04");
    }).toThrow("array of users is required");
  });

  test("Throws an error if parameter date not passed", () => {
    expect(() => {
      getScreentimeAlertList([] as Array<screenUser>, nullValue as string);
    }).toThrow("date is required");
  });

  test("valid dates and data", () => {
    expect(
      getScreentimeAlertList(
        [
          {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
              {
                date: "2019-05-01",
                usage: { twitter: 34, instagram: 22, facebook: 40 }
              },
              {
                date: "2019-05-02",
                usage: { twitter: 56, instagram: 40, facebook: 31 }
              },
              {
                date: "2019-05-03",
                usage: { twitter: 12, instagram: 15, facebook: 19 }
              },
              {
                date: "2019-05-04",
                usage: { twitter: 10, instagram: 56, facebook: 61 }
              }
            ]
          },
          {
            username: "jane_1234",
            name: "Jane Smith",
            screenTime: [
              {
                date: "2019-05-01",
                usage: { twitter: 34, instagram: 22, facebook: 40 }
              },
              {
                date: "2019-05-02",
                usage: { twitter: 56, instagram: 40, facebook: 31 }
              },
              {
                date: "2019-05-03",
                usage: { twitter: 12, instagram: 15, facebook: 19 }
              },
              {
                date: "2019-05-04",
                usage: { twitter: 10, instagram: 56, facebook: 61 }
              }
            ]
          },
          {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
              {
                date: "2019-06-11",
                usage: { twitter: 1, instagram: 6, facebook: 6 }
              },
              {
                date: "2019-06-13",
                usage: { twitter: 2, instagram: 5, facebook: 1 }
              },
              {
                date: "2019-06-14",
                usage: { twitter: 5, instagram: 6, facebook: 6 }
              }
            ]
          }
        ],
        "2019-05-04"
      )
    ).toStrictEqual(["beth_1234", "jane_1234"]);
  });
});
