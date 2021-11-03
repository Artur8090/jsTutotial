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