//задание 1
var max = 100;


console.log("интервал (0 - max)", Math.random() * max)
//задание 2

var min = 15;
var Max = 20;

console.log("интервал(min,max)", min + Math.random() * (Max - min))



//задание 3
function randomInteger(min1, max1) {
    var num = min1 + Math.random() * (max1 - min)
    num = Math.round(num);
    return num;
}

console.log("функция randomInteger(min, max)", randomInteger(10,20))