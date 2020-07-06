const returnFirstTwoDrivers=(driverArr)=>[driverArr[0],driverArr[1]];
const returnLastTwoDrivers=(driverArr)=>[driverArr[driverArr.length-2],driverArr[driverArr.length-1]];
let selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
function createFareMultiplier(integer) {
  return  (fare)=>( fare * integer)
}
function createFareMultiplier(integer) {
  return  (fare)=>( fare * integer)
}
const fareDoubler=createFareMultiplier(2);
const fareTripler=createFareMultiplier(3);

function selectDifferentDrivers(driverArr,returnFn){
  return returnFn(driverArr);
}