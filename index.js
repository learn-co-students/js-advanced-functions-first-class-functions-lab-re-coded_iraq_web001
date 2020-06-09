// Code your solution in this file!

const returnFirstTwoDrivers= function(driversArray){
    const newArray=[driversArray[0], driversArray[1]];
  return newArray;
};

const returnLastTwoDrivers= function(driversArray){
  const newArray=[driversArray[driversArray.length - 2], driversArray[driversArray.length -1]];
  return newArray;
};

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier= function(intNum){
  return function(fare=1){
  return fare *=intNum;
  };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler=createFareMultiplier(3);
const selectDifferentDrivers= function(driversArray, eitherFunc){
  return eitherFunc(driversArray);
  
};

