// Code your solution in this file!
const  returnFirstTwoDrivers=(drivers)=>{
  return [drivers[0],drivers[1]];
}

const  returnLastTwoDrivers=(drivers)=>{
  return [drivers[drivers.length-2],drivers[drivers.length-1]];
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(int){
  return function(fare){
    return int*fare;
  }
}

function fareDoubler (fare){
  return createFareMultiplier(2)(fare);
}

function fareTripler  (fare){
  return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(drivers,callbackFn){
  return callbackFn(drivers);

}
