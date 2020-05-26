function assign(arr, ...arrs) {
  for (let el of arrs) {
    for (let key in el) {
      arr[key] = el[key];
    }
  }
  return arr;
}