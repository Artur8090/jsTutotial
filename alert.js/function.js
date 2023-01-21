//проверка возраста
function checkAge(age) {
    if(age >= 18) {
        return true;
    } 
    return confirm("а родители разрешыльи?")
    
}
//alert(checkAge())
//проверка менщего числа
function min(a,b){
    if(a < b){
        return a;
    } else{
        return b;
    }
}

alert(min(5, 3));
alert(min(0.6, 0.06));
alert(min(-67, -0.67));

// проверка степеньей
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

function sumTo(num){
    var sum = 0;
    for(var i = 1; i < num; i++){
        sum += i;
    }
        return sum;
    

}
alert(sumTo(99));

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
alert(fib(15));
alert(fib(12));



function g() {return 1;}
alert(g)
(function j() {return 1;})
alert(j)