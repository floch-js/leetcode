/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
function maximumUnits(boxTypes, truckSize) {
  let units = 0;
  let remainingBoxSpace = truckSize;
  // boxType with the biggest unit will be at the beginning of the list
  boxTypes.sort((a, b) => b[1] - a[1]);

  for (const [numberOfBoxes, numberOfUnitsPerBox] of boxTypes) {
    if (numberOfBoxes >= remainingBoxSpace)
      return units + remainingBoxSpace * numberOfUnitsPerBox;
    units += numberOfBoxes * numberOfUnitsPerBox;
    remainingBoxSpace -= numberOfBoxes;
  }

  return units;
}

const boxTypes = [
  [1, 3],
  [2, 2],
  [3, 1],
  [1, 10],
];
const truckSize = 4;

const output = maximumUnits(boxTypes, truckSize);

console.log(output); // eslint-disable-line no-console
