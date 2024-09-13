//Q1
// function use(){
//     console.log("hello js");
// }
// use();

//Q2
// function dateTime(date,time){
// console.log(date+" and "+time)
// }
// dateTime("14 feburary","3pm");

//Q3
// function greet(firstName,lastName){
//     console.log(firstName+" "+lastName);
// }
// greet("Shaheer","Ahmed");

// //Q4
// function sum(num1,num2){
//     return num1+num2;
// }
// var ans=sum(20,21);
// console.log(ans);

//Q5 Calculator
// function sum(num1,num2,num3){
//     return num1+num2+num3;
// }
// var ans=sum(1,8,90);
// console.log(ans)

//Q6
// function square(num){
//     return num*num;
// }
// var ans1=square(2);
// var ans2=square(10);
// var ans3=square(20);
// console.log(ans1+", "+ans2+" ,"+ans3)

//Q7
function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    } else if (n === 0 || n === 1) {
        return 1; // Base case: 0! = 1 and 1! = 1
    } else {
        return n * factorial(n - 1); // Recursive case
    }
}

// Example usage:
let number = 5;  // Change the number to test
console.log("Factorial of " + number + " is: " + factorial(number));
