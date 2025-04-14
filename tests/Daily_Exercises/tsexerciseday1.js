//Ques 1. Declare a variable with a specific type, e.g., `username` (`string`) and `score` (`number`).
var username = 'Jadeja';
var score = 88;
console.log("1. Score of " + username + " in the final match is " + score);
//Ques 2. Declare a variable that uses a union type and can hold either a number or a string.
var employeeID = 208;
console.log("2. Value of Employee ID in the beginining: " + employeeID);
employeeID = "CIQ208";
console.log("2. Value of Employee ID in the now: " + employeeID);
//Ques 3. Create an array of numbers and print each number in the array.
var numbers = [67, 34, 2, 47];
console.log("3. Elements in my array:");
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
//Ques4. Subtraction with Type Declaration: Declare two variables `num1` and 
// `num2` with type `number`. Assign values to them and print their difference.
var num1 = 77;
var num2 = 45;
var differenceofNumbers = num1 - num2;
console.log("4. Difference of num2 from num1 is: " + differenceofNumbers);
//Ques5. Average Calculation:Create a variable `scores` that holds an array of numbers.
//  Calculate and print the average of the numbers in the array.
var scores = [1, 2, 3, 4, 10];
var lengthofArr = scores.length;
var sum = 0;
for (var i = 0; i < lengthofArr; i++) {
    sum = sum + scores[i];
}
var averageofElements = sum / lengthofArr;
console.log("5. Average of numbers in the Array:" + averageofElements);
//Ques6. Area of a Circle:Declare a variable `radius` with type `number`. 
// Use it to calculate the area of a circle (πr²) and print the result. Use `Math.PI` for the value of π.
var radiusOfCircle = 6;
var areaOfCircle = Math.PI * radiusOfCircle * radiusOfCircle;
console.log("6. Area of the Circle is : " + areaOfCircle);
