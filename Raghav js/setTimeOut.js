//Set Time Out 
//syntax - setTimeout(function, delay_in_milliseconds);

function hello(){
    console.log("Hello World");
}
function mello(){
    console.log("Mello");
}
setTimeout(hello,4*1000);
setTimeout(mello,2*1000);
setTimeout(function(){
    console.log("Anonymous function after 3 seconds");
}, 3000);
