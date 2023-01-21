//возврощяет десятичную
function getDecimal(num) {
    var Str = "bc" + num;
    console.log("Str", Str);
    var firstPose = Str.indexOf(".")
    console.log("firstPose", firstPose);
    if (firstPose == -1) {
        return 0;
    }
    Str = Str.slice(firstPose);

    return +Str;
  
}

console.log(getDecimal(1e6));

console.log(getDecimal(1.2));

console.log(getDecimal(-1.2))

