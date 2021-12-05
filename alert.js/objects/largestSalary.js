var salary = {
    "Вася": 450,
    "Юля": 900,
    "Анна": 100,
    "Антон": 900
};


var count = 0;
var maxName = 0;
for (var name in salary) {
    if (count < salary[name]) {
        count = salary[name]
       maxName = name;
    }
}
console.log(maxName || "no employes")
