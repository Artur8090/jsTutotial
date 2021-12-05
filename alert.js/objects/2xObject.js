var menu = {
    title: "my meny",
    width: 300,
    length: 200
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }

  function multiplyNumeric(obj)  {
      for (var key in obj) {
          if(isNumeric(obj[key])){
              obj[key] *= 2;
          }
      }

  }
  multiplyNumeric(menu)
  console.log("my menu width =  " + menu.width + " my menu length =  " + menu.length + " my menu title =  " + menu.title)