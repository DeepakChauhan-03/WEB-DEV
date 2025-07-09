// document.getElementsByTagName() 
// document.getElementsByClassName()
// document.querySelector()

//webgapge ke context me -- Kuch hone ko event kehte hai 

// let x = document.getElementById("box");
// x.addEventListener("mouseenter",function(){
//     x.style.backgroundColor = "yellow";
// })
// x.addEventListener("mouseout",function(){
//     x.style.backgroundColor = "red";
// })

// window.addEventListener("mousemove",function(dets){
//     x.style.top = dets.clientY + "px";
//     x.style.left = dets.clientX + "px";
// })

let a = document.querySelector("input");
let b = document.querySelector("h1");
a.addEventListener("input",function(){
    b.textContent = a.value;
})

