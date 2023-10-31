/* 
	👉 Update to some of the challenges having a go with Typescript
*/

/**
 * @param {Number} n
 */
export const sumDigits = (n: number) => {
  if (n === undefined) throw new Error("n is required");
  if (!Number.isInteger(n))
    throw new Error("n should be integer of datatype number");
  return n
    .toString()
    .replace(/-{1}/, "")
    .split("")
    .reduce((sum, num) => (sum += parseInt(num)), 0);
};

/**
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
export const createRange = (
  start: number,
  end: number,
  step: number | undefined
) => {
  if (start === undefined && end === undefined)
    throw new Error("start and end are required");
  if (end === undefined) throw new Error("end is required");
  let definedStep = step === undefined ? 1 : (step as number);
  const arrLen = (end - start) / definedStep + 1;
  return Array.from({ length: arrLen }, (item, i) => i * definedStep + start);
};

/**
 * @param {Array} users
 */
import { screenUser } from "../src/exercise6.types";
export const getScreentimeAlertList = (
  users: Array<screenUser>,
  date: string
) => {
  if (users === undefined || !Array.isArray(users))
    throw new Error("array of users is required");
  if (date === undefined || typeof date !== "string")
    throw new Error("date is required");
  const data = users
    .map(user => {
      const usageObj = user.screenTime.find(
        screenUse => screenUse.date === date
      );
      let count = 0;
      if (usageObj !== undefined) {
        count = Object.keys(usageObj.usage).reduce((accumulator, key) => {
          const myOb = usageObj.usage as any;
          return accumulator + myOb[key];
        }, 0);
      }
      if (count > 100) {
        return user.username;
      }
    })
    .filter(foundUser => foundUser !== undefined);
  return data;
};
