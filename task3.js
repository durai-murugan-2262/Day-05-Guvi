// Do the below programs in arrow functions

// Print odd numbers in an array

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let oddNum = (array) => {
  let oddNumbers = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      oddNumbers.push(array[i]);
    }
  }
  return oddNumbers;
};
let result = oddNum(arr1);
console.log(result);

// Sum of all numbers in an array

let numbers = [1, 2, 3, 4, 5, 6];
let sum = (numbers) => {
    total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    console.log(total);
};
sum(numbers);

// Return all the prime numbers in an array
let arrOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 24, 73, 83, 99, 101];
let primeNumbers = (array) => {
    let primeArray = [];
    for (let i= 0; i< array.length; i++) {
        let result = 0
        for (let j = 1; j <= array[i]; j++ ){
            if (array[i]%j == 0) {
                result += 1;
            }
        }
        if (result <= 2) {
            primeArray.push(array[i]);
        }
    }
    console.log(primeArray)
}
primeNumbers(arrOfNumbers)

// Return all the palindromes in an array
array = ["123", "343", "345", "325", "12621"];
let palindromeArray = (array) => {
  let palindromes = [];
  for (let i = 0; i < array.length; i++) {
    let arr = String(array[i]);
    let a = 0;
    let b = arr.length - 1;
    while (a < b) {
      if (arr[a] == arr[b]) {
        a++;
        b--;
      } else {
        break;
      }
      if (a >= b) {
        palindromes.push(array[i]);
      }
    }
  }
  console.log(palindromes);
};
palindromeArray(array);

// Remove duplicates from an array
let arrayOfDuplicateNumbers = [
  1, 2, 3, 4, 5, 6, 4, 5, 6, 6, 7, 8, 9, 10, 11, 3, 4, 5, 6,
];
let duplicateArray = (arr) => {
  originalArray = [...new Set(arrayOfDuplicateNumbers)];
  console.log(originalArray);
};
duplicateArray(arrayOfDuplicateNumbers);

// Rotate an array by k times
let array01 = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
let arr = (array01) => {
  let k = 3;
  for (let i = 0; i < k; i++) {
    array01.unshift(array01.pop());
  }

  console.log(array01);
};
arr(array01);
