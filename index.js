
// Code your solution in this file!
const returnFirstTwoDrivers = (array) =>{
  let newArray = [array[0], array[1]]
 return newArray
}

const returnLastTwoDrivers=(array)=>{
  let newArray2 =[array[array.length-2],array[array.length-1]]
  return newArray2;
}
let selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
function createFareMultiplier(integer){
  return (fare)=> fare*integer;
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(array,functions){
  return functions(array);
}