//The Number guesser game
var tries = 5;
var randNum = Math.random(1,10);
randNum = randNum * 10;
randNum.toFixed(0);

console.log(randNum)
while(tries > 0) {
    var values = prompt("insert numbers", 0);
    if(values < randNum){
        console.log("write a number larger than" + values);
        tries = tries - 1;
    } else if(values > randNum){
        console.log("write a number lower than" + values);
        tries = tries - 1;
    } else {
        console.log("you found the right number");
    }

}