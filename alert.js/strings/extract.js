extractCurrencyValue = function(str) {
    return str.slice(1);
}

alert(extractCurrencyValue("$120"));
alert(extractCurrencyValue("£430"));
