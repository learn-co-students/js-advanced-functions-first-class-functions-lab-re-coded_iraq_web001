// Code your solution in this file!
const returnFirstTwoDrivers = function(arr = []){
    const newArr = arr;
    return newArr.slice(0,2)
}
returnFirstTwoDrivers();
 const returnLastTwoDrivers = function(arr = []){
     return arr.slice(arr.length -2)
 }
 returnLastTwoDrivers();
 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

 function createFareMultiplier (fare){

    return function (multiplier = 4){
        return fare * multiplier

    }
 }
function fareDoubler(fare){

    const doubler = 2;
    return fare * doubler
 }
 function fareTripler (fare){
     const tripler = 3;
     return fare * tripler
 }
  function selectDifferentDrivers(drivers , returnFirstTwoDrivers){
     return returnFirstTwoDrivers(drivers)

  
 }