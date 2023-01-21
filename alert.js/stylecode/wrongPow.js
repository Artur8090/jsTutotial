
//wrong code
function pow(x,n) 
{
    var result=1;
    for(var i = 0;i<n;i++)  {result *= x;}
    return result;
}
x=prompt("x?","");
n=prompt("n?","");

if(n<=0) 
{
    alert("напешите степень болше "+n);
} else {
    alert( pow(x, n));
} 


// Right code      
function pow(x, n) { //<- пробел между аргументами
    var result = 1; // <- пробел между переменой

    for(var i = 0; i < n; i++){  //<- зделать ростояние после цыкла 
        result *= x;
    }

    return result;
}

var x = prompt("x?",""); // <- переменая назначина с помощю "var"
var n = prompt("n?",""); // <- есть ростояние между переменой и значения

if(n <= 1) {
    alert("напешите степень болше " + n);
} else {
    alert( pow( x, n) ); //<- есть пробел между назначения степеньей
} 
