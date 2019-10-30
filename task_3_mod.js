'use strict'

function cash(price, bill) {
  const changeVariants = []
  let sumRight = 0
  let lastArray
  let findPoint
  let leftPart
  let rightPart
  let change = bill - price
  const stack = []
  let a
  let c
  let d
  let e
  const billStack = [200, 100, 50, 20, 10, 5, 2, 1]

  for (var i = 0; i < 1; i++) {
    while (i < billStack.length) {
      for (a = Math.floor(change / billStack[i]); a > 0; a--) {
        change -= billStack[i]
        stack.push(billStack[i])
      }
      i++;
    }
  }

  changeVariants.push(stack)

  for (i = 0; i >= 0; i++) {
    lastArray = changeVariants[i]

    if (changeVariants[i].length === bill - price) {
      break
    }

    if (lastArray.includes(1, 0) === true) {
      findPoint = lastArray.indexOf(1, 0)
      findPoint = lastArray.indexOf(1, 0)
      leftPart = lastArray.slice(0, findPoint - 1)
      rightPart = lastArray.slice(findPoint - 1, lastArray.length)
      rightPart.forEach(function (item) {
        sumRight += item
      })
    } else {
      findPoint = lastArray.length
      leftPart = lastArray.slice(0, findPoint - 1)
      rightPart = lastArray.length
      sumRight = lastArray[lastArray.length - 1]
    }
 
    c = billStack.length - 2

    for (e = billStack.length - 1; e > 0; e--) {
      if (lastArray[findPoint - 1] === billStack[c]) {
        for (d = c + 1; d < billStack.length; d++) {
          for (a = Math.floor(sumRight / billStack[d]); a > 0; a--) {
            sumRight -= billStack[d]
            leftPart.push(billStack[d])
          }
        }
        changeVariants.push(leftPart)
      }
      c--
    }
  }
  console.log(changeVariants)
}

cash(136, 200)