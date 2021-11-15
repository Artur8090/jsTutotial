//возврощяет десятичную
function getDecimal(num) {
    var newString = "" + num ;
    console.log("newString", newString);
    var firstPose = newString.indexOf(".")
    console.log("firstPose", firstPose);
    if (firstPose == -1) {
        return 0;
    }
    newString = newString.slice(firstPose);

    return +newString;
  
}

console.log(getDecimal(12.1));

console.log(getDecimal(1.2));

console.log(getDecimal(-1.2))

