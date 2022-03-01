const sumAll = function(num1, num2) {
    // make sure both are numbers
    if (typeof(num1) !== "number" || typeof(num2) !== "number") return "ERROR"
    // make sure both are non-negative
    if (num1 < 0 || num2 < 0) return "ERROR"

    const min = Math.min(num1,num2)
    const max = Math.max(num1,num2)

    // sum of integers from m to n = avg * # = median * # = .5(m+n)(n-m+1)
    return 0.5 * (min + max) * (max - min + 1)
};

// Do not edit below this line
module.exports = sumAll;
