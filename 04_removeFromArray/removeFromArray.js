const removeFromArray = function(...args) {
    let arr = args[0]
    let newArray = []
    arr.forEach(item => {
        !args.includes(item) ? newArray.push(item) : null
    })
    return newArray

};

// Do not edit below this line
module.exports = removeFromArray;
