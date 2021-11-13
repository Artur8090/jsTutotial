truncate = function(str, maxlength) {
    return (str.length > maxlength) ? 
    str.slice(0, maxlength - 3) + "..." : str;

};
alert(truncate("Email From Jason, context: i will definitly come to the party!", 19));