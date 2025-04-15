 
/**Functions:**/
// 1. Write a function that calculates the area of a circle given its radius.
function circleArea(radius:number):number{
  return radius*radius*Math.PI
}
console.log("Area of the Circle = ",circleArea(5))

// 2. Create a function to check if a number is positive, negative, or zero.
function checkNumber(input:number){
    if(input>0){
        console.log(`${input} is Positve`)
    }
    else if(input===0){console.log(`${input} is Positve`)}
    else{console.log(`${input} is Negative`)}
        } checkNumber(5)
        checkNumber(-118)

// 3. Write a function that takes an array of numbers and returns the sum of all the numbers.
function sumOfArrElements(numbers: number[]){
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    console.log(`Sum of Array Elements is: ${sum}`);
}


sumOfArrElements([2,4,6,8]);  
              

// 4. Implement a function to find the maximum value in an array.
function maxofArr(nums:number[]){
    let max= nums[0]
    for(let i=0;i<=nums.length;i++){
        if(max<nums[i]){
            max=nums[i]
        }
    }
    console.log(`Maximum value in the Array is ${max}`)

}
maxofArr([6,-3,8,4])
// 5. Create a function that reverses the words in a given sentence.
function reverseWordsOfStr(originalStr:string){
    console.log(`Before Reversing: ${originalStr}`)
    let reversedStr=""
    for(let i=0;i<originalStr.length;i++){
     reversedStr= originalStr.charAt(i)+reversedStr 
    }
    console.log("After Reversing: ",reversedStr)
    
}
reverseWordsOfStr("Hello Everyone, I'm Reversing a String ..!")
 
/**Named Functions:**/
// 1. Write a named function to convert a temperature from Celsius to Fahrenheit.
// 2. Create a named function that finds the factorial of a number.
// 3. Implement a named function that checks if a given string contains vowels.
// 4. Write a named function to determine if a given year is a leap year.
// 5. Create a named function that returns the greatest common divisor (GCD) of two numbers.
 
/**Arrow Functions:**/
// 1. Write an arrow function to find the square of a number.
// 2. Create an arrow function that filters out even numbers from an array.
// 3. Implement an arrow function that calculates the average of a list of numbers.
// 4. Write an arrow function to return the length of the longest string in an array.
// 5. Use an arrow function to map over an array and return each number squared.