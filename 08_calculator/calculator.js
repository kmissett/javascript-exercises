const add = (a,b) => a + b

const subtract = (a,b) => a - b

const sum = (arr) => arr.reduce((a,b) => a+b, 0)

const multiply = (arr) => arr.reduce((a,b) => a*b, 1)

const power = (num, power) => Math.pow(num, power)

const factorial = function(num) {
	if (num === 0 ) return 1
  let result = 1
  for(let i=1; i <= num; i++) {result *= i}
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
