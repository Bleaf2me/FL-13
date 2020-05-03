function convert(...arg) {

  for (let i = 0; i < arg.length; i++) {
    typeof arg[i] === 'string' ? arg[i] = +arg[i] : arg[i] = arg[i] + '';
  }

  return arg;
}

function executeforEach(arr, callback) {

  for (let i = 0; i < arr.length; i++) {
   callback(arr[i]);
  }
}

function mapArray(arr, callback) {
  let newArr = [];

  executeforEach(arr, function (el) {
    newArr.push(callback(+el));
  });

  return newArr;
}

function filterArray(arr, callback) {
  let result = [];

  executeforEach(arr, function (el) {
    if (callback(el)) {
      result.push(el);
    }
  });

  return result;
}

function containsValue(arr, value) {
  let result = false;

  executeforEach(arr, function (el) {
    if (el === value) {
      result = true;
    }
  });

  return result;
}

function flipOver(str) {
  let newStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }

  return newStr;
}

function makeListFromRange (arr) {
  let newArr = [];

  for (let i = arr[0]; i <= arr[1]; i++) {
    newArr.push(i);
  }

  return newArr;
}

function getArrayOfKeys (arr, key) {
  let newArr = [];

  executeforEach(arr, function (el) {
    newArr.push(el[key]);
  });

  return newArr;
}

function substitute(arr) {
  
  return mapArray(arr, function (el) {
  let minNumber = 10,
      maxNumber = 20;  
    if (el > minNumber && el < maxNumber) {
      el = '*';
    }

    return el;
  });
}

function getPastDate(arg, days) {
  let newDate = new Date(arg);

    newDate.setDate(arg.getDate() - days);

  return newDate.getDate();
}

function formatDate(date) {
  let day = date.getDate(),
      month = date.getMonth() + 1,
      year = date.getFullYear(),
      hour = date.getHours(),
      minutes = date.getMinutes(),
      doubleDigit = 10;

  month = month < doubleDigit ? '0' + month : month;
  day = day < doubleDigit ? '0' + day : day;
  hour = hour < doubleDigit ? '0' + hour : hour;
  minutes = minutes < doubleDigit ? '0' + minutes : minutes;

  return `${year}/${month}/${day} ${hour}:${minutes}`;
}