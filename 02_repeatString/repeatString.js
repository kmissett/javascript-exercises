const repeatString = function(string, numRepeats) {


    return numRepeats >= 0 ? string.repeat(numRepeats) : "ERROR"
/*  
    let result = ""
    if (numRepeats < 0) {return "ERROR"}
    if (numRepeats === 0) {return ""}
    if (numRepeats === 1) {return string}

    for (let i=0; i < numRepeats; i++) {
        result = result.concat(string)
    }
    return result 
*/
};

// Do not edit below this line
module.exports = repeatString;
