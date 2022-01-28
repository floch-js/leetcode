/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  let currentMaxArea = 0;

  for (let i = 0; i < height.length; ++i)
    for (let j = i + 1; j < height.length; ++j) {
      const containerHeight = Math.min(height[i], height[j]);
      const containerWidth = j - i;
      const containerArea = containerHeight * containerWidth;
      currentMaxArea = Math.max(containerArea, currentMaxArea);
    }

  return currentMaxArea;
};

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea2 = (height) => {
  let currentMaxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const containerHeight = Math.min(height[left], height[right]);
    const containerWidth = right - left;
    const containerArea = containerHeight * containerWidth;
    currentMaxArea = Math.max(containerArea, currentMaxArea);

    if (height[left] > height[right]) --right;
    else ++left;
  }

  return currentMaxArea;
};

const height = [1, 2, 4, 3];

const output = maxArea(height);
const output2 = maxArea2(height);

console.log({ output, output2 }); // eslint-disable-line no-console
