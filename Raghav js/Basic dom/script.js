let x = document.getElementById("ele1");
x.addEventListener("click",function(){
    x.style.color = "skyblue";
    x.style.backgroundColor = "Yellow";
})

let y = document.getElementById("ele2");
y.addEventListener("mousemove",function(){
    y.style.color = "Red";
    y.style.backgroundColor = "Pink";
})

let z = document.getElementById("ele3");
y.addEventListener("click",function(){
    z.style.color = "purple";
    z.style.backgroundColor = "Blue";
})

z.addEventListener("click",function(){
    x.style.color = "orange";
    x.style.backgroundColor = "green";
    x.innerHTML = "Helooooo";
})

z.addEventListener("mouseenter",function(){
    z.style.color = "lightgreen";
    z.style.backgroundColor = "Black";
})
z.addEventListener("mouseleave",function(){
    z.style.color = "Black";
    z.style.backgroundColor = "white";
})