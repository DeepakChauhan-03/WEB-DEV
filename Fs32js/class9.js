// let arr =["deepak","rahul","amit","vijay"];
//  let newval= arr.map(function(value){
//     // return value.substring(0,1);
//     console.log(value.substring(0,1).toUpperCase() + value.substring(1));
// });

//Make an array and copy it into a newarray and increase the price with 18% GST
let arr = [
    {
        name:"Fridge",
        price:10000
    },
     {  
        name:"TV",
        price:5000
     },
     {
        name:"AC",
        price:20000
     }
];

let newarr = arr.map(function(value){
   return {...value,price:value.price + value.price * .18};
});
console.log(newarr);