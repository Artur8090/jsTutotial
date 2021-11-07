function fibNet (n) {
    var f = (1 + Math.sqrt(5)) / 2;
    return Math.round(Math.pow(f, n)) / (Math.sqrt(5));

}
alert(fibNet(77));