// let h1 = document.querySelector("h1");
// h1.style.color = "red";

// let lis = document.querySelectorAll("li");
// lis.forEach(function(li){
//     li.addEventListener("click",function(){
//         li.style.display = "none";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
//     //   alert("Error404");
//     });
// });

// let H = document.querySelectorAll("h1");
// H.forEach(function(h1){
//     h1.addEventListener("click",function(){
//         h1.style.color = "red";
//         h1.style.fontStyle = "italic";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
//     });
// });

let image = document.querySelectorAll("img");
image.forEach(function(img){
    img.addEventListener("click",function(){
        img.setAttribute('src', `https://images.unsplash.com/photo-1751442188780-c4ba25403392?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    });
});