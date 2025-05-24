//array

// let arr = [];
// for(let i = 1; i<=5; i++){
//     let a = prompt("Enter value");
//     arr.push(a);
// }
// console.log(arr);

//ques 2
// let sum = 0;
// for(let i = 1; i<=8; i++){
//     let a = prompt("Enter value");
//     a = Number(a);
//     sum = sum+a;
//     console.log("till now : ",sum);
// }

//ques 3
let sum = 0;
for(let i = 1; i<=8; i++){
    let a = prompt("Enter value");
    a = Number(a);
    if(a===null){
          
    }
    if(a==="" || a.trim()===""){
              
     }
    if(isNaN(a)){
         console.log("till now : ",sum);
    }
    else{
         sum = sum+a;
         console.log("till now : ",sum);
    }
}
