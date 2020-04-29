function positiveSum(arr) {
  let sum = 0;
  for (let number of arr) {
    if (number > 0) {
      sum += number;
    }
  }
  return sum;
}

console.log(positiveSum([2, 4, 6, 8]));
console.log(positiveSum([0, -3, 5, 7]));