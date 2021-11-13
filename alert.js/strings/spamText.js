checkSpam = function(str) {

    var loweringStr = str.toLowerCase();
        return !!(~loweringStr.indexOf("viagra") 
    || ~loweringStr.indexOf("xxx"));

}
alert(checkSpam("xXx hot chicks in your area"));
alert(checkSpam("Buy ViAgRa for 14.99$"));
alert(checkSpam("Email from Katy, context: our boss died so we are making a party."));
