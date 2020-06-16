// Code your solution in this file!
const returnFirstTwoDrivers=(arr) =>{ let newArray=[]
 newArray[0]=arr[0]
 newArray[1]=arr[1]
  return newArray
}

const returnLastTwoDrivers=(arr) => { let lastArray=[]
let len=arr.length
 lastArray[0]=arr[len-2]
 lastArray[1]=arr[len-1]
 console.log(lastArray)
  return lastArray
}


const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(num){
    return function(rate){
           return rate*num
  }
}

const fareDoubler=createFareMultiplier(2)
fareDoubler()
const fareTripler=createFareMultiplier(3)
fareTripler()

function selectDifferentDrivers(arrayDrivers,b){
 return  b(arrayDrivers)
}
selectDifferentDrivers(['a','b','c','d'],selectingDrivers[0])




