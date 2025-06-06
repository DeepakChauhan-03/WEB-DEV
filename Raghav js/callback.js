//Callback function ek aisa function hota hai jo ek function 
//ke andar chalta hai

function product(a,b,c){
    return a*b*c;
}
function fun(x,y){
    console.log(x-y);
}

fun(product(2,3,2),5);
