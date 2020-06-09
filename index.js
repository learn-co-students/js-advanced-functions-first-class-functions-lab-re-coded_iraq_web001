// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
//const drivers1 = drivers.slice(0,2);

//const drivers2 = drivers.slice(2,4);


function returnFirstTwoDrivers(drivers){
   return drivers.slice(0,2);
  }
function returnLastTwoDrivers(drivers){
  return drivers.slice(2,4);

}
 const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
   
function createFareMultiplier(b){
return function(a){
 return  a * b
}
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers,returnFirstTwoDrivers){
  return returnFirstTwoDrivers(drivers)
}
