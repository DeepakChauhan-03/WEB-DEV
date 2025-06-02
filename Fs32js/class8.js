// let arr = ["deepak",2,3,4,"Shivam",7,8,"Rahul"];
// let brr=[];
// let sum = 0;
// arr.forEach(function(value){
//     if(typeof value === "string"){
//         {
//           brr.push(value);
//         }
//     }
// });
// console.log(brr);

//MAP -- is used when we make a similar size of new array 

//   <___Filter_____>  -- in this we can return only true and false value
// let arr = [800,1200,1400,200,400,1600];
// let blankarr = arr.filter(function(value){
//     if(typeof value === "number"){
//         if(value>1000){
//             return true;
//         }
//     }
// });


// let arr = ["deepak",2,3,4,"Shivam",7,8,"Rahul"];
// let brr=[];
// arr.forEach(function(value){
//     if(typeof value === "string"){
//         {
//           brr.push(value, "@gmail.com");
//         }
//     }
// });
// console.log(brr);

// let arr = ["deepak",2,3,4,"Shivam",7,8,"Rahul","ram"];
// let a = arr.filter(function(value){
//     if(typeof value === "string"){
//         if(value.length>4){
//          return true;
//         }
//     }
// });

// let arr = ["deepak",2,3,4,10,18,24,27,"Shivam","Rahul","ram"];

// let inr= arr.map(function(value){
//     if(typeof value === "number"){
//          return value*83;
//     }
// });
// let a = inr.filter(function(value){
//     return value<1000;
// });

// let arr = [12,2,847,900,2100,2039,100];
// let f = arr.filter(val => val*83)



//  OBJECTTTTTTTTTTTTTTTT
let car =[{name:'BMW', price: 800},
    {name:"Honda", price: 900},
    {name:"KIA", price: 500},
    {name:"Audi", price: 400}
];
let fil = car.filter(function(value){
    return value.price>500;
});