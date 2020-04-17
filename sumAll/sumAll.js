const sumAll = function(num1, num2) {
    let sumTotal = 0;

    if (num1 < 0 || num2 < 0 || typeof(num1) != "number" || typeof(num2) != "number") {
        return "ERROR"
    }
    
    start = Math.min(num1, num2);
    end = Math.max(num1,num2);


    for (let i=start; i<=end; i++) {
        sumTotal += i;
    }
    return sumTotal;
}

module.exports = sumAll
