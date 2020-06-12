// Code your solution in this file!
const returnFirstTwoDrivers = function (driverArray) {
    let newArray = [driverArray[0], driverArray[1]]
    return newArray;

  }


// console.log(returnFirstTwoDrivers(['ali','ahmed','gfgfg']));


const returnLastTwoDrivers = function(lastDriversArray){
   const arrLenght = lastDriversArray.length;
   let newArray = [lastDriversArray[arrLenght-2],lastDriversArray[arrLenght-1]]
   return newArray
}
// console.log(returnLastTwoDrivers(['ali','ahmed','sfsfs','fsddf']));


// let selectingDrivers = [...returnFirstTwoDrivers(['ali','ahmed','gfgsdf','fsdgdddsddf']),...(returnLastTwoDrivers(['ali','ahmed','sfsfs','fsddf']))]

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

// console.log(selectingDrivers);


function createFareMultiplier(integer){
    return function (fare){
        return fare * integer
    }
}
// console.log(createFareMultiplier(4)(4));
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

let  selectDifferentDrivers  = function(drivers ,filterFn){
    return filterFn(drivers)
}
