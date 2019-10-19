// MAX NUMBER
function max (arr) {
  arr.sort((a, b) => b - a)
  const maxNumber = arr[0]
  console.log(maxNumber)
}

max([1, NaN, 345.3, null, undefined, 'abc', 3, 5, -3])

// MIN NUMBER
function min (arr) {
  const newArray = []
  arr.forEach(function (element) {
    if (typeof (element) === 'number' && isNaN(element) !== true) {
      newArray.push(element)
    }
  })
  newArray.sort((a, b) => b - a)
  const minNumber = newArray[newArray.length - 1]
  console.log(minNumber)
}

min([4, 12, 3.2, 5, null, NaN, undefined, 8, 123, 9, -22.6, 56])

// SUM OF NUMBERS
function sum (arr) {
  let sumOfNumbers = arr[0]
  for (var i = 1; i < arr.length; i++) {
    if (typeof (arr[i]) === 'number' && isNaN(arr[i]) !== true) {
      sumOfNumbers += arr[i]
    }
  }
  console.log(sumOfNumbers)
}

sum([1, 100, 49, 300, NaN, 3.2, 'sdf', null, undefined, 5, -3])

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
  mmsObject.max = maxNumber
  mmsObject.min = minNumber
  mmsObject.sum = added
  console.log(mmsObject)
}

minMaxSum([4, 12, 3, 5, null, NaN, undefined, 8, 123, 9, -22.5, 56])
