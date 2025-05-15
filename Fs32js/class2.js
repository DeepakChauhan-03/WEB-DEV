
// let a = 2;
// if(typeof a === "string"){
//     console.log("String")
// }
// else if(typeof a === "number"){
//     console.log("Number ");
// }
// else{
//     console.log("Nothing");
// }
// let a = prompt("Enter Number");
//  a = Number(a);

// let a = prompt("Enter number");
// a = Number(a);
// if(typeof a === "string"){
//     console.log("Error");
// }

let input = prompt("Enter a number");
if (input !== null && input.trim() !== "") {
    console.log("You entered a string");
} else {
    console.log("Invalid input");
}