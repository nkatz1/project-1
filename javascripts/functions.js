// jshint esversion: 6

//Req 3b
let arr = [1, 2, 3, 4, 5, 6];
let arrAVG = arr => {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  var avg = sum / arr.length;

  console.log(avg);
};

//Req. 3c

let num = [2, 3, 5, 7, 9];
let arrMax = numbers => {
  let currentMaximum = -Infinity;
  numbers.forEach(function(number) {
    if (number > currentMaximum) {
      currentMaximum = number;
    }
  });
  return currentMaximum;
};
//arrMax(num)

//Req 3d
let arr_numbers = [1, 2, 3, 4, 5];
let sumEvens = arr => {
  sum = 0;
  for (let i of arr) {
    if (arr[i] % 2 == 0) {
      sum += arr[i];
    }
  }
  return sum;
};
//sumEvens(arr_numbers);
