// Given an array of int between 1 and n, where n is the length of array, write a function that returns
// the first int that appears more than once (when we read array left to right)
// If no integer appears more than once, then we return -1.

const problemQuestion = (arr) => {
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      return arr[i];
    }
    set.add(arr[i]);
  }
  return -1;
} // O(n) time complexity