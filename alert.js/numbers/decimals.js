//возврощяет десятичную
function getDecimal(num) {

var newString = "" + num;
var firstPose = newString.indexOf(".")
if (firstPose == -1) return 0;
newString = newString.slice(firstPose);
return +newString;

}
alert(getDecimal(12.5) );

alert(getDecimal(34.1) );