function letterCount(a, b) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i].toLowerCase() === b.toLowerCase()) {
      count++;
    }
  }
  return count;
}

console.log(letterCount("Maggy", "g"));
console.log(letterCount("Barry", "b") );
console.log(letterCount("", "z"));
