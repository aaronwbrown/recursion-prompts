// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {

  if (n < 0) {
    return null;
  } else if (n === 0) {
    return 1;
  } else {
    return n * factorial(n -1);
  }

};


// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {

  var arrayCopy = array.slice();

  if (arrayCopy.length === 0) {
    return undefined;
  } else if (arrayCopy.length === 1) {
    return arrayCopy[0];
  } else {
    var item = arrayCopy.pop();
    return item + sum(arrayCopy);
  }

};

var myArray = [1, 2, 3, 4, 5, 6];
console.log(sum(myArray));


// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],  ,5]); // 15
var arraySum = function(arr) {
  var array = arr.slice();
  var sum = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i] instanceof Array) {
      sum += arraySum(array[i]);
    }
    if (typeof array[i] === "number") {
      sum += array[i];
    }
  }

  return sum;

};

var mixedArr = [1,[2,3],[[4]],5];
console.log(arraySum(mixedArr));


// 4. Check whether a number is even or not.
var isEven = function(n) {

  if (n < 0) {
    n = n * -1;
  }

  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else {
    return isEven(n - 2);
  }

};

console.log(isEven(-31));


// 5. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {

  if (y - x === 0 || x === y - 1) {
    return [];
  }

  if (x < y) {
    if (y - x === 2) {
      return [x + 1];
    } else {
      var list = range(x, y - 1);
      list.push(y - 1);
      return list;
    }
  } else {
    if (x - y === 2) {
      return [y + 1];
    } else {
      var list = range(x, y + 1);
      list.push(y + 1);
      return list;
    }
  }

};

console.log(range(19,10));


// 6. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {


  if (exp === 0) {
    return 1;
  } else if (exp < 0){
    exp = exp * -1;
    return 1 / (base * exponent(base, exp - 1));
  }else {
    return base * exponent(base, exp - 1);
  }

};

console.log(exponent(3, -3));


// 7. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  // create copy of string
  var str = string.slice();

  if (str.length === 0) {
    return "";
  } else {
    return reverse(str.slice(1)) + str.charAt(0);
  }
};

console.log(reverse("Racecar"));


// 8. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {

  var str = string.split(" ").join("").toLowerCase();

  if (str.length <= 1) {
    return true;
  } else if (str.slice(0,1) !== (str.slice(-1))) {
    return false;
  } else {
    return palindrome(str.slice(1, -1));
  }

};

console.log(palindrome("sAip puaki v iKaup Pias"));


// 9. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {

  if (y === 0 || x === 0) {
    return 0;
  } else if (y < x) {
    return x - y;
  } else {
    return y + modulo(x - 1, y);
  }

};

console.log(modulo(15, 7));


// 10. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {

  if (x < 0 && y < 0) {
    x = -x;
    y = -y;
  }

  if (y === 0) {
    return 0;
  } else {
    return x + multiply(x, y - 1);
  }

};

console.log(multiply(-275, -502));


// 11. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
// var divide = function(x, y) {

//   if (y === 0) {
//     return 0;
//   } else if () {

//   }

// };


// 12. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {

};


// 13. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {

};


// 14. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){

};


// 15. Reverse the order of an array
var reverseArr = function (array) {

};


// 16. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {

};


// 17. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {

};


// 18. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {

};


// 19. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {

};


// 20. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {

};


// 21. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {

  if (n <= 2) {
    return 1;
  } else {
    return fibonacci(n-2) + fibonacci(n-1);
  }

};

console.log(fibonacci(8));


// 22. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {

};


// 23. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {

};


// 24. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {

};


// 25. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {

};


// 26. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {

};


// 27. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {

};


// 28. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {

};


// 29. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {

};


// 30. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {

};


// 31. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {

};



// *** EXTRA CREDIT ***

// 32. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {

};


// 33. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {

};


// 34. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {

};
