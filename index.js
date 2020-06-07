// Code your solution in this file!

const returnFirstTwoDrivers = function (arr){

  let firstTwoDrivers = [arr[0],arr[1]];
  console.log(firstTwoDrivers);


  return firstTwoDrivers;
  // console.log(newArr);
}

const returnLastTwoDrivers = function (arr){

  let lastTwoDrivers = [arr[arr.length-2],arr[arr.length-1]];
  return lastTwoDrivers;
  // console.log(newArr);
}

 let selectingDrivers = [
returnFirstTwoDrivers , returnLastTwoDrivers
]

function createFareMultiplier (int){
  return function(fare){
    return int*fare;
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

 function selectDifferentDrivers(drivers , fun ){

return fun(drivers);
}
