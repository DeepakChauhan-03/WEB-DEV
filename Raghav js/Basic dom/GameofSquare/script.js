let s1 = document.getElementById("sq1");
s1.addEventListener("mouseenter",function(){
     let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    s1.style.background = `rgb(${r1},${r2},${r3})`;
    let r = Math.floor(Math.random()*100);
    s1.innerHTML = `<h1>${r}</h1>` ;
})
s1.addEventListener("mouseleave",function(){
    s1.style.background = "white";
    s1.innerHTML = "<h1>1</h1>";
})


let s2 = document.getElementById("sq2");
s2.addEventListener("mouseenter",function(){
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    s2.style.background = `rgb(${r1},${r2},${r3})`;
    let r = Math.floor(Math.random()*100);
    s2.innerHTML = `<h1>${r}</h1>` ;
})
s2.addEventListener("mouseleave",function(){
    s2.style.background = "white";
    s2.innerHTML = "<h1>2</h1>";
})


let s3 = document.getElementById("sq3");
s3.addEventListener("mouseenter",function(){
     let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    s3.style.background = `rgb(${r1},${r2},${r3})`;
    let r = Math.floor(Math.random()*100);
    s3.innerHTML = `<h1>${r}</h1>` ;
})
s3.addEventListener("mouseleave",function(){
    s3.style.background = "white";
    s3.innerHTML = "<h1>3</h1>";
})


let s4 = document.getElementById("sq4");
s4.addEventListener("mouseenter",function(){
     let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    s4.style.background = `rgb(${r1},${r2},${r3})`;
    let r = Math.floor(Math.random()*100);
    s4.innerHTML = `<h1>${r}</h1>` ;
})
s4.addEventListener("mouseleave",function(){
    s4.style.background = "white";
    s4.innerHTML = "<h1>4</h1>";
})
