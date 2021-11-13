//задание 1
var max = 100;



alert(Math.random()* max)
//задание 2
var min = 15, Max = 20;

alert(Math.random()* (Max - min));

//задание 3
function randomInteger(min1, max1) {
    var num = min1 + Math.random() * (max1 - min)
    num = Math.round(num);
    return num;
}
alert(randomInteger(1,3));
