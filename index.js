const returnFirstTwoDrivers = (arr)=>{
  return [arr[0],arr[1]]
}
const returnLastTwoDrivers = (arr)=>{
  return [arr[arr.length-2],arr[arr.length-1]]
}
let selectingDrivers =[ returnFirstTwoDrivers,returnLastTwoDrivers]
function createFareMultiplier(x){
  return (y=0)=>{
  if(y === 0){
     return x*x}
  else{
   return x*y}
  }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
function selectDifferentDrivers(arr=[],returnFirstTwoDrivers){
  return returnFirstTwoDrivers(arr)
}
