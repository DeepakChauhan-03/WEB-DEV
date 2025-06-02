//Functions
// function greet(value){
//     console.log(value);
//     console.log(value);
//     console.log(value);
//     console.log(value);
//     console.log(value);
// }

// greet(12);

//forEach
// let arr = [1,2,3,4,5];
// arr.forEach(function(value){
//     console.log(value);
// });

// let arr = ["deepak",2,8, "chauhan",5, "Amit", "Kundan",3,4];
// arr.forEach(function(value){
//     if(typeof value === "string"){
//         console.log(value);
//     }
// });

// let arr = ["deepak",2,8, "chauhan",5, "Amit", "Kundan",3,4];
// arr.forEach(function(value){
//     if(typeof value === "number"){
//         console.log(value);
//     }
// });

// let sum = 0;
// let arr = [1,2,3,4,5];
// arr.forEach(function(value){
//     sum=sum+value;
// });
// console.log(sum);


let arr = ["deepak",2,8, "chauhan",5, "analog", "Kundan",3,4];
arr.forEach(function(value){
    if(typeof value === "string"){
        if(value.charAt(2)==="a"){
            console.log(value);
        }
    }
});