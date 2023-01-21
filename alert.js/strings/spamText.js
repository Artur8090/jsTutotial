checkSpam = function (str) {
    var lowerStr = str.toLowerCase();
    var spam = lowerStr.indexOf("xxx"), spam1 = lowerStr.indexOf("viagra");
   console.log("spam",spam)
   console.log("spam1", spam1)
    
   if(spam > -1 || spam1 > -1){
       return true;
   }

   return false;
}

console.log("expected true", checkSpam("xXx hot chicks in your area"));
console.log("expected true", checkSpam("Buy ViAgRa for 14.99$"));
console.log("expected false", checkSpam("Email from Katy, context: our boss died so we are making a party."));
