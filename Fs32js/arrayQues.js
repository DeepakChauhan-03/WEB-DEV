//Ques 1
// let arr = [];
// for(let i=1; i<=5; i++){
//     let a = prompt("Enter value");
//     arr.push(a);
// }
// console.log(arr);


//Ques 2 -- Prompt the user 7 times. Count and print how many inputs were valid numbers.

let count = 0;
 for(let i=1; i<=7; i++){
   let a = prompt("Enter value");
   a = Number(a);
   if(isNaN(a)){

   }
   else{
    count = count+1;
    console.log(a);
   }
 }
 console.log("Total valid inputs numbers are : ",count);

//Ques 3 -- Prompt the user 6 times. Add and print the total only if the number is even.
//  Ignore spaces, blanks, and cancelled inputs.
// let total = 0;
// for(let i=1; i<=6; i++){
//     let a = prompt("Enter value");
//     a = Number(a);
//    if(a%2===0){
//     total = total+a;
//    }
// }
// console.log(total);

//Ques 4 -- Take 5 prompts, store them in an array, and print the array in reverse order.
// let arr =[];
// for(let i=1; i<=5; i++){
//      let a = prompt("Enter value");
//      arr.push(a);
// }
// for(let i=5; i>=1; i--){
//     console.log(arr[i]);
// }

//Ques 5 -- Prompt the user 4 times for any word. 
// Print the word that has the highest number of characters.
 
// let largestword = "";
// for(let i=1; i<=4; i++){
//     let a = prompt("Enter word");
//     if(a.length>largestword.length){
//         largestword = a;
//     }
// }
// console.log("word that has highest number of character is : ",largestword);


//Ques 6 -- Prompt the user 6 times for anything. Store all valid numbers in
//  a new array and print just that array.
// let arr = [];
// for(let i=1; i<=6; i++){
//     let a = prompt("Enter value");
//     a = Number(a);
//     arr.push(a);
// }
// console.log(arr);

//Ques 7 -- Prompt the user 5 times for numbers. Ignore blank or cancelled inputs.
//  Print the total and the average of valid numbers.
 
// let total = 0;
// let avg = 0;
// for(let i=1; i<=5; i++){
//     let a = prompt("Enter value");
//     a = Number(a);
//    total = total+a;
// }
// avg = total/5;
// console.log("Total is : ",total);
// console.log("Average is : ",avg);

//Ques 8 -- Prompt 6 numbers and print the smallest and largest numbers entered.

// let arr = [];
// for(let i=1; i<=6; i++){
//     let a = prompt("Enter value");
//     a = Number(a);
//     arr.push(a);
// }
// let smallest = arr[0];
// let largest = arr[0];
// for(let i=0; i<6; i++){
//     if(arr[0]>arr[i]){
//         smallest = arr[i];
//     }
//     if(arr[0]<arr[i]){
//         largest = arr[i];
//     }
// }
// console.log("Smallest number is : ",smallest);
// console.log("Largest number is : ",largest);

//Ques 9 -- Take 4 prompts. If any input is exactly “admin” or “password”, 
// show an alert saying “You entered a reserved word!”. Otherwise, log all inputs.

// let arr = [];
// for(let i=1; i<=4; i++){
//   let a = prompt("Enter value");
//   if (a === "admin" || a === "password") {
//         alert("You entered a reserved word!");
//  }  
//   else {
//         arr.push(a);
//       }
//     }
// console.log("Logged inputs:" , arr);

//Ques 10 -- Prompt the user to enter one number. Print the first 10 multiples of that number.

// let a = prompt("Enter number");
// a = Number(a);
// for(let i=1; i<=10; i++){
//     console.log(`${a} x ${i} = ${a * i}`);
// }
    