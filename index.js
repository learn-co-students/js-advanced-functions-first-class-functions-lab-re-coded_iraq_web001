// Code your solution in this file!
const returnFirstTwoDrivers=   (arr)=>{
  let newArr = [arr[0],arr[1]];
   return newArr;
}
const returnLastTwoDrivers = (arr) =>{
  let newArr = [arr[arr.length-2],arr[arr.length-1]];
   return newArr;
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(fare) {
  return  (num)=>{
    return num * fare;
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(arrayOfDrivers, functions) {
return functions(arrayOfDrivers);
}
