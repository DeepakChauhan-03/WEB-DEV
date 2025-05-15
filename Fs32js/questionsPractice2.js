//ques1
// let a = prompt("Enter any string");
// if(typeof a === "string"){
//     console.log("You entered a string");
// }
// else{
//     console.log("Invalid input");
// }

//ques2
// var a = prompt("Enter a number");
// a = Number(a);
// if(!isNaN(a)){
//     console.log("Your number is: ",a);
// }
// else{
//     console.log("Please enter a valid number");
// }

//ques3
// var a = prompt("Enter a number");
// a = Number(a);
// if(a%2===0){
//     console.log("Even Number");
// }
// else if(!a%2===0){
//     console.log("Odd number");
// }
// else{
//     console.log("Not a valid number");
// }

//ques 4
// var a = prompt("Enter any string");
// if(a===""){
//     console.log("You didn't enter anything");
// }
// else{
//     console.log("Thank you for your input");
// }

//ques 5
// var a = prompt("Enter any string");
// if(a==="true" || a==="false"){
//     console.log("You entered a boolean string");
// }
// else{
//     console.log("Not a boolean string");
// }

//ques 6
// var a = prompt("Enter your age");
// a = Number(a);
// if(a<18){
//     console.log("You are underage");
// }
// else if(a>18){
//     console.log("Your are an adult");
// }
// else{
//     console.log("Please enter a valid age");
// }

//ques 7
// var a = prompt("Enter a number");
// a = Number(a);
// if(a>=10 && a<=100){
//    console.log("Number is in range");
// }
// else if(!(a>=10 && a<=100)){
//     console.log("Not in range");
// }
// else{
//     console.log("Enter a valid number");
// }

//ques 8
// var a = prompt("Enter a password");
// var b = "deepak1234";
// if(a===b){
//     console.log("Access granted");
// }
// else{
//     console.log("Wrong password");
// }

//ques 9
var a = prompt("Enter a word");
if(a===""){
    console.log("Empty input");
}
else if(a.length>5){
    console.log("Long word");
}
else if(a.length<5){
    console.log("Short word");
}