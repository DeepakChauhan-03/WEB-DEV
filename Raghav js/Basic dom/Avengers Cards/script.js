let main = document.getElementById("main");
let arr = [
    "https://i.pinimg.com/736x/2e/73/03/2e7303af8daf9a550a13e22e2068b9bd.jpg",
    "https://i.pinimg.com/736x/69/1f/5c/691f5ca416f5fe2f57815a0793f0a889.jpg",
    "https://i.pinimg.com/736x/00/41/56/0041568a8f18a8f2b2e36fe21494715a.jpg",
    "https://i.pinimg.com/736x/4f/49/92/4f4992a46d50ad884a247e5fc584251f.jpg",
    "https://i.pinimg.com/736x/b5/86/d4/b586d4988fd0129a311a5533190deb20.jpg",
    "https://i.pinimg.com/736x/2d/1b/e5/2d1be56ee121372852a1776cbeee0e01.jpg",
    "https://i.pinimg.com/736x/64/63/dc/6463dc4e44d3eef862d3df70ff0022d2.jpg",
    "https://i.pinimg.com/736x/76/1f/2f/761f2fe7b2f9a5ca167cea8024d4cba1.jpg",
    "https://i.pinimg.com/736x/ef/99/a2/ef99a20b9ba8cc741508b9016b3a3013.jpg"
];
let s = "";
for(let i=1; i<=55; i++){
    let r = Math.floor(Math.random()*arr.length)
    s+=`<div class="card">
            <img src="${arr[r]}">
        </div>`;
}
main.innerHTML = s;