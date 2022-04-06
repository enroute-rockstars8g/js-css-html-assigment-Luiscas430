/*Function that takes a number and returns its position and fibonacci value*/
function fibonacci() {
    const fiboNum = parseInt(document.getElementById("fiboInput").value);
    var fib = [];
    fib[0] = 0;
    fib[1] = 1;

    if (fiboNum == 0) {
        res = 0;
    } else if (fiboNum == 1) {
        res = 1;
    } else {
        for (i = 2; i <= fiboNum; i++) {
            fib[i] = fib[i - 2] + fib[i - 1];
            res = fib[i];
        }
    }
    document.getElementById("fiboResult").innerHTML = res;
}

/*Function that takes a number and returns its factorial value*/
function factorial() {
    const factNum = parseInt(document.getElementById("factInput").value);
    var num = factNum

    for (var i = num - 1; i >= 1; i--) {
        num *= i
    }
    document.getElementById("factResult").innerHTML = num;
}