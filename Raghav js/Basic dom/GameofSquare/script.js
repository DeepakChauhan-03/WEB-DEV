let s1 = document.getElementById("sq1");
s1.addEventListener("mouseenter",function(){
    s1.style.background = "red";
    let r = Math.floor(Math.random()*100);
    s1.innerHTML = `<h1>${r}</h1>` ;
})
s1.addEventListener("mouseleave",function(){
    s1.style.background = "white";
    s1.innerHTML = "<h1>1</h1>";
})






let s2 = document.getElementById("sq2");
let s3 = document.getElementById("sq3");
let s4 = document.getElementById("sq4");