// Code your solution in this file!

const returnFirstTwoDrivers = function (arrOfDriver){
let newArr = [arrOfDriver[0], arrOfDriver[1]];
return newArr;
};

const returnLastTwoDrivers = function (arrOfDriver) {
let newArr = [arrOfDriver[arrOfDriver.length-2], arrOfDriver[arrOfDriver.length-1]];
return newArr;
};

let selectingDrivers = [
returnFirstTwoDrivers,
returnLastTwoDrivers
];

function createFareMultiplier(int) {
return function(fare){
  return int * fare;
};
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrOfDriver, returnedFun){
return returnedFun(arrOfDriver);
}
