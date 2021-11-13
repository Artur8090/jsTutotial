function ucFirst(string) {
      if (!string) return string;
    
      return string[0].toUpperCase() + string.slice(1);
    }

alert(ucFirst("банан"))
alert(ucFirst("squid game"))