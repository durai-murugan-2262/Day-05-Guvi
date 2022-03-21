1. Programs in IIFE & Anonymous function:

 Print odd numbers in an array.
CODE:

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
(array => {
  let oddNumbers = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      oddNumbers.push(array[i]);
    }
  }
  console.log(oddNumbers);
})(arr);


 Sum of all numbers in an array
CODE:

let numbers = [1, 2, 3, 4, 5, 6];
(numbers => {
    total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    console.log(total);
})(numbers);

 Return all the prime numbers in an array
CODE:

let arrOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 24, 73, 83, 99, 101];
(array => {
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
})(arrOfNumbers)

 Return all the palindromes in an array
CODE:

array = ["123", "343", "545", "325", "12621"];
(array => {
    let palindromes = [];
    for (let i= 0; i< array.length; i++) {
        let str = String(array[i]);
        let a = 0;
        let b = str.length - 1;
        while(a < b) {
            if (str[a] == str[b]) {
                a++
                b--
            } else {
                break;
            }
            if(a >= b) {
                palindromes.push(array[i]);
            }
        }
    }
    console.log(palindromes)
})(array);


 Remove duplicates from an array.
CODE:

let arrayOfDuplicateNumbers = [1, 2, 3, 4, 5, 6, 4, 5, 6, 6, 7, 8, 9, 10, 11, 3, 4, 5, 6];
(arr => {
    originalArray = [...new Set(arrayOfDuplicateNumbers)];
    console.log(originalArray);
})(arrayOfDuplicateNumbers);

 Rotate an array by k times.
CODE:

let array01 = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
((array01) => {
  let k = 3;
  for (let i = 0; i < k; i++) {
    array01.unshift(array01.pop());
  }

  console.log(array01);
})(array01);
