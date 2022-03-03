const palindromes = function (string) {
    const stripped = string.split(/[^A-Za-z]/).join("").toLowerCase()
    const reversed = string.split(/[^A-Za-z]/).join("").split("").reverse().join("").toLowerCase()

    return stripped === reversed
};

// Do not edit below this line
module.exports = palindromes;
