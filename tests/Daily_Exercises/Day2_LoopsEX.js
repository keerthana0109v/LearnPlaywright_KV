/**Loops:**/
//1. Write a program to print the first 10 numbers in the Fibonacci sequence.
var n = 10;
var firstTerm = 0;
var secondTerm = 1;
console.log("Fibonacci Series till " + n + " terms:");
for (var i_1 = 1; i_1 <= n; ++i_1) {
    console.log(firstTerm);
    var nextTerm = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = nextTerm;
}
// 3. Write a program to reverse a string using a loop.
function reverseStr(originalStr) {
    console.log("Before Reversing: ".concat(originalStr));
    var reversedStr = "";
    for (var i_2 = 0; i_2 < originalStr.length; i_2++) {
        reversedStr = originalStr.charAt(i_2) + reversedStr;
    }
    console.log("After Reversing: ", reversedStr);
}
reverseStr("Hello Everyone, I'm Reversing a String ..!");
// 4. Implement a program to calculate the factorial of a given number using a loop.
var factorialnum = 5;
var factorial = 1;
for (var i_3 = 1; i_3 <= factorialnum; ++i_3) {
    factorial = factorial * i_3;
}
console.log("Factorial of ".concat(factorialnum, " is ").concat(factorial));
// 5. Write a program to generate a multiplication table for numbers 1 to 10.
var multiplicationOfnum = 7;
var i = 1;
console.log("Multiplication table of 7 is: ");
while (i <= 10) {
    console.log(multiplicationOfnum + " * " + i + " = " + (multiplicationOfnum * i));
    i++;
}
// 2. Create a program that prints all prime numbers between 1 and 100.
