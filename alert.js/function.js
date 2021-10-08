
function checkAge(age) {
    if(age >= 18) {
        return true;
    } 
    return confirm("а родители разрешыльи?")
    
}
//alert(checkAge())

function min(a,b){
    if(a < b){
        return a;
    } else{
        return b;
    }
}
/*
alert(min(5, 3));
alert(min(0.6, 0.06));
alert(min(-67, -0.67));
*/

function pow(x, n) {
    var result = x;

    for(var i = 1; i < n; i++){
        result *= x;
    }

    return result;
}
var x = prompt("x?","");
var n = prompt("n?","");

if(n <= 1) {
    alert("напешите степень болше " + n);
} else {
    alert( pow( x, n) );
} 
