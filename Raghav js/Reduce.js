let arr = [1,2,3,4,5];
let x = arr.reduce(function(a,b,c){
    return a+b+c;
});
console.log(x);