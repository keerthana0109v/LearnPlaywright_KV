/**Conditional Statements:**/
//1. Write a program to check if a given number is odd or even.
var num1 = 989;
if (num1 % 2 == 0) {
    console.log("{num1} is Even number ");
}
else {
    console.log("".concat(num1, " is Odd number "));
}
console.log("                   ");
//2. Create a function that takes a grade and returns whether it is "Pass" or "Fail" 
// based on a threshold value.
var passMark = 45;
function result(grade) {
    if (grade > passMark) {
        //console.log("Your Result: ** PASS **")
        return "Your Result: ** PASS **";
    }
    else {
        //console.log("Your Result: ** FAIL **")
        return "Your Result: ** FAIL **";
    }
}
console.log("When the grade is more than 45-> ", result(76));
console.log("When the grade is less than 45-> ", result(38));
console.log("                   ");
//3. Write a program to determine the type of triangle (equilateral, isosceles, or scalene) 
// based on its sides.
function findTriangleType(s1, s2, s3) {
    if (s1 == s2 && s2 == s3 && s1 == s3)
        return "Equilateral triangle";
    else if (s1 == s2 || s1 == s3 || s2 == s3)
        return "Isosceles Triangle";
    else
        (s1 !== s2 || s2 !== s3 || s1 !== s3);
    return "Scalene Triangle";
}
console.log(findTriangleType(14, 20, 14));
console.log(findTriangleType(6, 6, 6));
console.log(findTriangleType(15, 20, 25));
console.log("                   ");
//4. Implement a program to check if a string is a palindrome or not.
function checkPalindrome(originalStr) {
    var reversedStr = "";
    for (var i = 0; i < originalStr.length; i++) {
        reversedStr = originalStr.charAt(i) + reversedStr;
    }
    console.log(reversedStr);
    if (reversedStr == originalStr) {
        return "The Given string is Palindrome";
    }
    else {
        return "The Given string is not a Palindrome";
    }
}
console.log(checkPalindrome("keerthana"));
console.log(checkPalindrome("madam"));
console.log("                   ");
//5. Write a program that checks if a given year is a leap year.
var year = 2004;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("".concat(year, " is a Leap Year"));
}
else {
    console.log("".concat(year, " is Not a Leap Year"));
}
