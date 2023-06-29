var a = prompt("insert value for a",0);
var b = prompt("insert value for b",0);
var c = prompt("insert value of the hypotenuse",0)
var sum = a**2 + b**2
var pyt = Math.sqrt(sum);
if (pyt === c){
    console.log("The triangle is right");
} else if (pyt > c){
    console.log("The triangle is obtuse")
} else {
    console.log("The triangle is acute")
};


