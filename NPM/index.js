const _ = require("lodash");

const numbers = [33, 46, 76, 65, 56];

_.each(numbers, function(number, i) {
  console.log(number);
});
