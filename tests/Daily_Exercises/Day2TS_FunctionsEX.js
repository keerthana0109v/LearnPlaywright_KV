/**Functions:**/
// 1. Write a function that calculates the area of a circle given its radius.
function circleArea(radius) {
    return radius * radius * Math.PI;
}
console.log("Area of the Circle = ", circleArea(5));
// 2. Create a function to check if a number is positive, negative, or zero.
function checkNumber(input) {
    if (input > 0) {
        console.log("".concat(input, " is Positve"));
    }
    else if (input === 0) {
        console.log("".concat(input, " is Positve"));
    }
    else {
        console.log("".concat(input, " is Negative"));
    }
}
checkNumber(5);
checkNumber(-118);
// 3. Write a function that takes an array of numbers and returns the sum of all the numbers.
function sumOfArrElements(numbers) {
    var sum = 0;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        sum += num;
    }
    console.log("Sum of Array Elements is: ".concat(sum));
}
sumOfArrElements([2, 4, 6, 8]);
// 4. Implement a function to find the maximum value in an array.
function maxofArr(nums) {
    var max = nums[0];
    for (var i = 0; i <= nums.length; i++) {
        if (max < nums[i]) {
            max = nums[i];
        }
    }
    console.log("Maximum value in the Array is ".concat(max));
}
maxofArr([6, -3, 8, 4]);
// 5. Create a function that reverses the words in a given sentence.
function reverseWordsOfStr(originalStr) {
    console.log("Before Reversing: ".concat(originalStr));
    var reversedStr = "";
    for (var i = 0; i < originalStr.length; i++) {
        reversedStr = originalStr.charAt(i) + reversedStr;
    }
    console.log("After Reversing: ", reversedStr);
}
reverseWordsOfStr("Hello Everyone, I'm Reversing a String ..!");
/**Named Functions:**/
// 1. Write a named function to convert a temperature from Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
;
console.log("Converted celsius to Fahrenheit is : ", celsiusToFahrenheit(100));
// 2. Create a named function that finds the factorial of a number.
//let factorialnum:number = 5;
function findFactorial(factorialnum) {
    var factorial = 1;
    for (var i = 1; i <= factorialnum; ++i) {
        factorial = factorial * i;
    }
    return "Factorial of ".concat(factorialnum, " is ").concat(factorial);
}
console.log(findFactorial(5));
// 3. Implement a named function that checks if a given string contains vowels.
// 4. Write a named function to determine if a given year is a leap year.
//let year1:number= 2004
function leapYearOrNot(year1) {
    if ((year1 % 4 === 0 && year1 % 100 !== 0) || year1 % 400 === 0) {
        console.log("".concat(year1, " is a Leap Year"));
    }
    else {
        console.log("".concat(year1, " is Not a Leap Year"));
    }
}
leapYearOrNot(2004);
// 5. Create a named function that returns the greatest common divisor (GCD) of two numbers.
/**Arrow Functions:**/
//syntax: const functionName = (parameters) => {
//     // function body
//   };
// 1. Write an arrow function to find the square of a number.
var squareOfNumber = function (num2) {
    var squared = num2 * num2;
    return "Square of the given number is ".concat(squared);
};
console.log(squareOfNumber(9));
// 2. Create an arrow function that filters out even numbers from an array.
// 3. Implement an arrow function that calculates the average of a list of numbers.
function averageOfArrElements(numbers) {
    var sum = 0;
    var average;
    for (var _i = 0, numbers_2 = numbers; _i < numbers_2.length; _i++) {
        var num = numbers_2[_i];
        sum += num;
    }
    console.log("Sum of Array Elements is: ".concat(sum));
    average = sum / numbers.length;
    console.log("Average of Array Elements is: ".concat(average));
}
averageOfArrElements([2, 4, 6, 8]);
// 4. Write an arrow function to return the length of the longest string in an array.
// 5. Use an arrow function to map over an array and return each number squared.
var numsArr = [1, 4, 9, 16];
var squaredArr = numsArr.map(function (i) { return i * i; });
console.log(squaredArr);
