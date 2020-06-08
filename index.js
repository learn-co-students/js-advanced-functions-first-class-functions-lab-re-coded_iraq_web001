// Code your solution in this file!

const returnFirstTwoDrivers = function(arrayOfDrivers){
  return arrayOfDrivers.slice(0, 2);
};

const returnLastTwoDrivers = function(arrayOfDrivers){
  return arrayOfDrivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplyIntegar){
  return function(integar){
    return integar * multiplyIntegar;
  };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, returnLastTwoDrivers){
  return returnLastTwoDrivers(arrayOfDrivers)
}