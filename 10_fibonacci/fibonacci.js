const fibonacci = function(nth) {
    const nthFib = parseInt(nth)
    if(nthFib <= 0) return "OOPS"
    if(nthFib === 1) return 1

    let fibArray = [0,1]
    for (let i=2; i <= nthFib; i++) {
        fibArray.push(fibArray[i-1] + fibArray[i-2])
    }
    return fibArray[nth]
};

// Do not edit below this line
module.exports = fibonacci;
