var numbers = [];

while (true) {
    var values = prompt("insert numbers", 0);
    if (values === "" || values === null || isNaN(values)) break;
    numbers.push(+values);

}
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);