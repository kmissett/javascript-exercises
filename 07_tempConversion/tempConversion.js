const ftoc = function(fahr) {
  return parseFloat((5 * (fahr - 32) / 9).toFixed(1))
};

const ctof = function(cel) {
  return parseFloat((1.8 * cel + 32).toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
