const findTheOldest = function(arr) {
    const currentYear = new Date().getFullYear()
    const sorted = arr.sort((a,b) => {
        
        const aAge = a.hasOwnProperty("yearOfDeath") ? a.yearOfDeath - a.yearOfBirth : currentYear - a.yearOfBirth
        const bAge = b.hasOwnProperty("yearOfDeath") ? b.yearOfDeath - b.yearOfBirth : currentYear - b.yearOfBirth

        return (aAge > bAge) ? -1 : 1
    })

    return sorted[0]
};

// Do not edit below this line
module.exports = findTheOldest;
