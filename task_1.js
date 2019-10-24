'use strict'

// MIN NUMBER
function min (arr) {
  const newArray = []
  arr.forEach(function (element) {
    if (isNaN(element) !== true) {
      newArray.push(element)
    }
  })
  newArray.sort((a, b) => a - b)
  const minNumber = newArray[0]
  console.log(minNumber)
}

min([4, -100, -3, null, NaN, undefined, 8, 123, 9, -22.6])

// MAX NUMBER
function max (arr) {
  arr.sort((a, b) => b - a)
  const maxNumber = arr[0]
  console.log(maxNumber)
}

max([4, -100, -3, null, NaN, undefined, 8, 123, 9, -22.6])

// SUM OF NUMBERS
function sum (arr) {
  let sumOfNumbers = arr[0]
  for (var i = 1; i < arr.length; i++) {
    if (isNaN(arr[i]) !== true) {
      sumOfNumbers += arr[i]
    }
  }
  console.log(sumOfNumbers)
}

sum([4, -100, -3, null, NaN, undefined, 8, 123, 9, -22.6])

// MIN MAX SUM
function minMaxSum (arr) {
  const newArray = []
  const mmsObject = {}
  let added = 0
  arr.forEach(function (element) {
    if (typeof (element) === 'number' && isNaN(element) !== true) {
      newArray.push(element)
      added += element
    }
  })
  newArray.sort((a, b) => b - a)
  const minNumber = newArray[newArray.length - 1]
  const maxNumber = newArray[0]
  mmsObject.min = minNumber
  mmsObject.max = maxNumber
  mmsObject.sum = added
  console.log(mmsObject)
}

minMaxSum([4, -100, -3, null, NaN, undefined, 8, 123, 9, -22.6])
