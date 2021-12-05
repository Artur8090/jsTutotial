"use strict";

var salaries = {
    "петя": 460,
    "вася": 350,
    "саша": 580
}
var summary = 0;
for (var names in salaries) {
    summary += salaries[names]
};

console.log(summary);