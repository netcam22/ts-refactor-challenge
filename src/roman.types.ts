export type romanKey = { [key: string]: number };

export const ROM_NUM_SINGLE: romanKey = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1
} as const;

export const ROM_NUM_DOUBLE: romanKey = {
  CM: 900,
  CD: 400,
  XC: 90,
  XL: 40,
  IX: 9,
  IV: 4
} as const;

export const ROM_NUM: romanKey = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
} as const;

export type romanSingleKey = typeof ROM_NUM_SINGLE;
export type romanDoubleKey = typeof ROM_NUM_DOUBLE;
export type romanNumeralKey = typeof ROM_NUM;
