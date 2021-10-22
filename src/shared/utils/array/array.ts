/**
 * Returns new array with additional provided element;
 * If the array already includes provided element
 * then return an array without this element
 */
export const toggleArrayElement = <T>(arr: readonly T[], element: T): T[] => {
  const elementIndex = arr.indexOf(element);

  if (elementIndex === -1) {
    return [...arr, element];
  }

  const newArr = [...arr];

  newArr.splice(elementIndex, 1);

  return newArr;
};
