// Topic-- SetTimeout
// console.log("Hello 1");
// console.log("Hello 2");
// console.log("Hello 3");
// console.log("Hello 4");
// function hello(){
//     console.log("Timeout works");
// }
// setTimeout(hello,4*1000);
// setTimeout (function(){
//     console.log("Function works")
// },5000)

let h5 = document.querySelector("h5");
let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    setTimeout(() => {
        h5.innerHTML = "Friends";
    h5.style.color = "Yellow";
    }, 2*1000);
})