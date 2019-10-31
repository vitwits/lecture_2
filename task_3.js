'use strict'

function cash (price, banknote, banknoteStack) {
  const changeVariants = []
  const stack = []

  let sumRight = 0
  let lastArray
  let findPoint
  let leftPart
  let rightPart
  let change = banknote - price
  let timesToSubtract
  let aCounter
  let bCounter
  let cCounter

  for (var i = 0; i < 1; i++) {
    while (i < banknoteStack.length) {
      for (timesToSubtract = Math.floor(change / banknoteStack[i]); timesToSubtract > 0; timesToSubtract--) {
        change -= banknoteStack[i]
        stack.push(banknoteStack[i])
      }
      i++
    }
  }

  changeVariants.push(stack)

  for (i = 0; i >= 0; i++) {
    lastArray = changeVariants[i]

    if (changeVariants[i].length === banknote - price) {
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

    aCounter = banknoteStack.length - 2

    for (cCounter = banknoteStack.length - 1; cCounter > 0; cCounter--) {
      if (lastArray[findPoint - 1] === banknoteStack[aCounter]) {
        for (bCounter = aCounter + 1; bCounter < banknoteStack.length; bCounter++) {
          for (timesToSubtract = Math.floor(sumRight / banknoteStack[bCounter]); timesToSubtract > 0; timesToSubtract--) {
            sumRight -= banknoteStack[bCounter]
            leftPart.push(banknoteStack[bCounter])
          }
        }
        changeVariants.push(leftPart)
      }
      aCounter--
    }
  }
  console.log(changeVariants)
}

cash(36, 200, [200, 100, 50, 20, 10, 5, 2, 1])
