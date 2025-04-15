/**Loops:**/
//1. Write a program to print the first 10 numbers in the Fibonacci sequence.

let n:number = 10 
let firstTerm:number = 0
let secondTerm:number = 1
console.log("Fibonacci Series till " + n + " terms:");

for (let i = 1; i <= n; ++i) {
  console.log(firstTerm);
let nextTerm:number = firstTerm + secondTerm;
  firstTerm = secondTerm;
  secondTerm = nextTerm;
}


// 3. Write a program to reverse a string using a loop.
function reverseStr(originalStr:string){
    console.log(`Before Reversing: ${originalStr}`)
    let reversedStr:string=""
    for(let i=0;i<originalStr.length;i++){
     reversedStr= originalStr.charAt(i)+reversedStr 
    }
    console.log("After Reversing: ",reversedStr)
    
}
reverseStr("Hello Everyone, I'm Reversing a String ..!")

// 4. Implement a program to calculate the factorial of a given number using a loop.
let factorialnum:number = 5;
let factorial:number = 1;
        for(let i = 1; i <= factorialnum; ++i)
        {
            factorial = factorial * i;
          
        }
       console.log(`Factorial of ${factorialnum} is ${factorial}`)

// 5. Write a program to generate a multiplication table for numbers 1 to 10.


let multiplicationOfnum:number = 7 
let i = 1;
console.log("Multiplication table of 7 is: ")
while(i <= 10)
{
    console.log(multiplicationOfnum+ " * "+ i+" = " + (multiplicationOfnum * i));
    i++;
}

// 2. Create a program that prints all prime numbers between 1 and 100.