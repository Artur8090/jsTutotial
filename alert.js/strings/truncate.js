truncate = function (str, maxlength) {
    if (str.length > maxlength)
        return str.slice(0, maxlength - 3) + "...";
    return str;

};
alert(truncate("Email From Jason, context: i will definitly come to the party!", 19));