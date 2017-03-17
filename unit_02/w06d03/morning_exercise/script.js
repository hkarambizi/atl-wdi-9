//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
  var smallBarrel = 60;
  var largeBarrel = (total - (small * smallBarrel)) / large;

return largeBarrel;
};

barrels(2, 5, 825);
//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
  //your code here
  var earthCircumference = 24,901;
  var earthGallons = earthCircumference / milesPerGallon;
  var earthFuelCost = earthGallons * fuelPrice;

  return earthFuelCost;
};

shipFuelCost(3, 12);
//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(a, b, c, d){
  //your code here
};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
