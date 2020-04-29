function countPoints(arr) {
  let points = 0;
  for (let i = 0; i < arr.length; i++) {

    if (arr[i][0] > arr[i][2]) {
      points += 3;
    } else if (arr[i][0] === arr[i][2]) {
      points += 1;
    }
    
  }
  return points;
}

console.log(countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']));
console.log(countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0'] ));