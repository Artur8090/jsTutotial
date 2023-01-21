/* //Switch to IF
var browser = prompt("какой у вас браузер?");
if(browser == "IE") {
    alert("наш сайт поддержывает IE!");
} else if(browser == "fireFox" 
|| browser == "Chrome" 
|| browser == "Safari" 
|| browser == "Opera") {
    alert("наш сайт поддержывает и эти браузеры тоже!");
} else if(browser == null) {
    alert("было отменено")
} else {
    alert("мы не поддержываем этот браузер")
}
//If to Switch
var a = +prompt("a?",);
switch(a){
    case 0:
        alert(0)
    case 1:
        alert(1)
    case 2:
    case 3:
        alert("2,3");
        break;
}
*/