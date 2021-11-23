isEmpty = function (obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

var schedule = {}

var schedule1 = {
    9: 30,
    9: 40,
    9: 50
};


console.log("empty schedule", isEmpty(schedule));

console.log("filled schedule", isEmpty(schedule1));

