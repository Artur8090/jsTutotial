var a = 2;
var x = 1 + (a *= 2)

//alert(x);

function isInteger(num){
    return(num ^ 0) === num;
}
//alert(isInteger(1))
//alert(isInteger(1.5))
//alert(isInteger(-0.5))
var a = "right"
var b = " wrong"
var c = " maybe"
var d = " or"
var e = " absolutely wrong"
var f = " of course"

a ^ b === a ^ b
c & d === c & d
e | f === e | f

alert(null || 2 || undefined);
alert(alert(1) || 2 || alert(3));