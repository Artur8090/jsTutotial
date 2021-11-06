/*
var priceA = 0.2, priceB = 0.1;

alert(+(priceA + priceB).toFixed(2));


function fiboNet (n) {
    var a = 1,
    b = 0,
    x;
for(var i = 0; i < n; i++) {


x = a + b;
a = b;
b = x;
}
return b;
}

alert(fiboNet(20))




var max = 100;



alert(Math.random()* max)

var min = 15, Max = 20;

alert(Math.random()* (Max - min));
*/

function randomInteger(min, max) {
    var num = min + Math.random() * (max - min)
    num = Math.round(num);
    return num;
}
alert(randomInteger(1,3));