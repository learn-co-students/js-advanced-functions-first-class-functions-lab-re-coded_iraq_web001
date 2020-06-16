// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers)
{const drivers1=drivers.slice(0,2);
  return drivers1;
}


const returnLastTwoDrivers = function(drivers)
{const drivers1=drivers.slice(drivers.length-2);
  return drivers1;
}

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];


const createFareMultiplier =function (intx){return function(fare){return fare * intx;}}

function fareDoubler(fare){
  
 return createFareMultiplier(2)(fare);
}

function fareTripler(fare){
  
 return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(drivers, returnLastTwoDrivers)
{
  return returnLastTwoDrivers(drivers);
}