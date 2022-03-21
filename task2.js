// var num = 10;
// function addFive(num) {
//   return num + 5;
// }
// var result = addFive(num);
// console.log(result);

// var num = "5a";
// function getOpposite(num) {
//   if (typeof num !== "number") {
//     return -1;
//   } else {
//     return -num;
//   }
// }
// var result = getOpposite(num);
// console.log(result);

// var min = 5;
// function toSeconds(min) {
//     return min* 60;
// }
// var secs = toSeconds(min)
// console.log(secs);

// var mystr = "5";
// function toInteger(mystr) {
//   return parseInt(mystr);
// }
// var myint = toInteger(mystr);
// console.log(myint);

// var myint = 0;
// function nextNumber(myint) {
//   return myint + 1;
// }
// var myNextint = nextNumber(myint);
// console.log(myNextint);

// var arr = [1, 2, 3];
// function getFirstElement(arr) {
//   return arr[0];
// }
// var data = getFirstElement(arr);
// console.log(data);

// var arr = [1, 2, 3];
// function hourToSeconds(arr) {
//   for (let elem of arr) {
//     console.log(elem * 3600);
//   }
// }
// var data = hourToSeconds(arr);

// function findPerimeter(num1, num2) {
//   return 2*(num1 + num2);
// }
// var peri = findPerimeter(6, 7);
// console.log(peri);

// function lessThan100(num1, num2) {
//   sum = num1 + num2;
//   if (sum < 100) {
//     return true;
//   } else {
//     return false;
//   }
// }
// var res = lessThan100(22, 15);
// console.log(res);

// function remainder(num1, num2) {
//   return num1 % num2;
// }
// var res = remainder(1, 3);
// console.log(res);

// function CountAnimals(tur, horse, pigs) {
//   console.log(2 * tur + 4 * horse + 4 * pigs);
// }
// var legs = CountAnimals(2, 3, 5);

// function frames(num1, num2) {
//   console.log(num1 * num2 * 60);
// }
// var fps = frames(1, 2);

// function divisibleByFive(num1) {
//   if (num1 % 5 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// var divisible = divisibleByFive(5);
// console.log(divisible);

// function isEven(num) {
//   if (typeof num != "number") {
//     return 1;
//   }else if (num % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// var even = isEven(5);
// console.log(even);

// function areBothOdd(num1, num2) {
//   if (num1 % 2 == 1 && num2 % 2 == 1) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(areBothOdd(5, 2));

// function getFullName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }
// console.log(getFullName("durai", "murugan"));

// function getLengthOfWord(word) {
//   if (typeof word != "string") {
//     return -1;
//   } else {
//     return word.length;
//   }
// }
// console.log(getLengthOfWord("hello world"));

// function isSameLength(word1, word2) {
//   if (word1.length == word2.length) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isSameLength("hello", "world"));

// function getDistance(x1, y1, x2, y2) {
//   return ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5;
// }
// console.log(getDistance(100, 100, 400, 300));

// function getNthElement(array, n) {
//   return array[n];
// }
// console.log(getNthElement([3, 4, 5], 2));

// function getLastElement(array) {
//   if (array.length == 0) {
//     return -1;
//   } else {
//     return array[array.length - 1];
//   }
// }
// console.log(getLastElement([1, 2, 3, 4]));

// var obj = {
//   mykey: "value",
// };
// function getProperty(obj, key) {
//   return obj[key];
// }
// console.log(getProperty(obj, "mykey"));

// var obj = {
//   mykey: "value",
// };
// function addProperty(obj, key) {
//   obj[key] = true;
// }
// addProperty(obj, "yourkey");
// console.log(obj);

// var obj = {
//   mykey: "value",
//   yourkey: "jeusks",
// };
// function removeProperty(obj, key) {
//   delete obj[key];
// }
// removeProperty(obj, "yourkey");
// console.log(obj);

// var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// function countPositivesSumNegatives(arr) {
//   index0 = 0;
//   index1 = 0;
//   for (let num of arr) {
//     if (num > 0) {
//       index0 += 1;
//     } else {
//       index1 += 1;
//     }
//   }
//   return [index0, index1];
// };
// var ar2 = countPositivesSumNegatives(arr);
// console.log(ar2);

// function getPositives(ar) {
//   positiveArr = [];
//   for (let num of ar) {
//     if (num > 0) {
//       positiveArr.push(num);
//     }
//   }
//   return positiveArr;
// }
// console.log(getPositives([1, 2, 3, 4, 5, -2, -1]));

// function powerOfTwo(n) {
//   result = [];
//   for (let i = 0; i <= n; i++) {
//     result.push(2 ** i);
//   }
//   return result;
// }
// console.log(powerOfTwo(3));

// function findMax(ar) {
//   let maxValue = 0;
//   for (let num of ar) {
//     if (maxValue < num) {
//       maxValue = num;
//     }
//   }
//   return maxValue;
// }
// var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// var max = findMax(ar);
// console.log("Max: ", max);

// printPrimes(100);
// // Function prints the first nPrimes numbers
// function printPrimes(nPrimes) {
//   var n = 0;
//   var i = 2;
//   while (n < nPrimes) {
//     if (isPrime(i)) {
//       console.log(n, " → ", i);
//       n++;
//     }
//     i++;
//   }
// }
// // Returns true if a number is prime
// function isPrime(n) {
//   let result = false;
//   for (let i = 2; i <= n - 1; i++) {
//     if (n % i != 0) {
//       result = true;
//     } else {
//       result = false;
//       return result;
//     }
//   }
//   return result;
// }

// function getPrimes(nPrimes, startAt) {
//   var n = 0;
//   var i = startAt;
//   while (n < nPrimes) {
//     if (isPrime(i)) {
//       console.log(n, " → ", i);
//       n++;
//     }
//     i++;
//   }
// }
// // Returns true if a number is prime
// function isPrime(n) {
//   let result = false;
//   for (let i = 2; i <= n - 1; i++) {
//     if (n % i != 0) {
//       result = true;
//     } else {
//       result = false;
//       return result;
//     }
//   }
//   return result;
// }
// console.log(getPrimes(10, 100));

// function reverseString(string) {
//   let reversedString = "";
//   for (let i = 0; i < string.length; i++) {
//     reversedString += string[string.length - 1 - i];
//   }
//   return reversedString;
// }
// var str = reverseString("Javascript");
// console.log(str);

// var ar1 = [1, 2, 3];
// var ar2 = [4, 5, 6];
// var ar = mergeArrays(ar1, ar2);
// console.log(ar);
// function mergeArrays(ar1, ar2) {
//   var result = [];
//   //this will add the first array to the result array
//   for (let el of ar1) {
//     result.push(el);
//   }

//   //Some piece of code goes here
//   for (let el of ar2) {
//     result.push(el);
//   }
//   return result;
// }

// function sumCSV(s) {
//   let ar = s.split(",");
//   let sum = 0;
//   for (let i = 0; i < ar.length; i++) {
//     sum += parseFloat(ar[i]);
//   }
//   return sum;
// }
// console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9 "));
