'use strict'

function cash (price, bill) {
  const changeVariants = []
  let sumRight = 0
  let lastArray
  let findPoint
  let leftPart
  let rightPart
  let change = bill - price
  const stack = []
  let a
  const billStack = [200, 100, 50, 20, 10, 5, 2, 1]

  for (var i = 0; i < 1; i++) {
    for (a = Math.floor(change / billStack[0]); a > 0; a--) {
      change -= billStack[0]
      stack.push(billStack[0])
    }

    for (a = Math.floor(change / billStack[1]); a > 0; a--) {
      change -= billStack[1]
      stack.push(billStack[1])
    }

    for (a = Math.floor(change / billStack[2]); a > 0; a--) {
      change -= billStack[2]
      stack.push(billStack[2])
    }

    for (a = Math.floor(change / billStack[3]); a > 0; a--) {
      change -= billStack[3]
      stack.push(billStack[3])
    }

    for (a = Math.floor(change / billStack[4]); a > 0; a--) {
      change -= billStack[4]
      stack.push(billStack[4])
    }

    for (a = Math.floor(change / billStack[5]); a > 0; a--) {
      change -= billStack[5]
      stack.push(billStack[5])
    }

    for (a = Math.floor(change / billStack[6]); a > 0; a--) {
      change -= billStack[6]
      stack.push(billStack[6])
    }

    for (a = Math.floor(change / billStack[7]); a > 0; a--) {
      change -= billStack[7]
      stack.push(billStack[7])
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

    if (lastArray[findPoint - 1] === 2) {
      for (a = Math.floor(sumRight / billStack[7]); a > 0; a--) {
        sumRight -= billStack[7]
        leftPart.push(billStack[7])
      }
      changeVariants.push(leftPart)
    }

    if (lastArray[findPoint - 1] === 5) {
      for (a = Math.floor(sumRight / billStack[6]); a > 0; a--) {
        sumRight -= billStack[6]
        leftPart.push(billStack[6])
      }

      for (a = Math.floor(sumRight / billStack[7]); a > 0; a--) {
        sumRight -= billStack[7]
        leftPart.push(billStack[7])
      }
      changeVariants.push(leftPart)
    }

    if (lastArray[findPoint - 1] === 10) {
      for (a = Math.floor(sumRight / billStack[5]); a > 0; a--) {
        sumRight -= billStack[5]
        leftPart.push(billStack[5])
      }

      for (a = Math.floor(sumRight / billStack[6]); a > 0; a--) {
        sumRight -= billStack[6]
        leftPart.push(billStack[6])
      }

      for (a = Math.floor(sumRight / billStack[7]); a > 0; a--) {
        sumRight -= billStack[7]
        leftPart.push(billStack[7])
      }
      changeVariants.push(leftPart)
    }

    if (lastArray[findPoint - 1] === 20) {
      for (a = Math.floor(sumRight / billStack[4]); a > 0; a--) {
        sumRight -= billStack[4]
        leftPart.push(billStack[4])
      }

      for (a = Math.floor(sumRight / billStack[5]); a > 0; a--) {
        sumRight -= billStack[5]
        leftPart.push(billStack[5])
      }

      for (a = Math.floor(sumRight / billStack[6]); a > 0; a--) {
        sumRight -= billStack[6]
        leftPart.push(billStack[6])
      }

      for (a = Math.floor(sumRight / billStack[7]); a > 0; a--) {
        sumRight -= billStack[7]
        leftPart.push(billStack[7])
      }
      changeVariants.push(leftPart)
    }

    if (lastArray[findPoint - 1] === 50) {
      for (a = Math.floor(sumRight / billStack[3]); a > 0; a--) {
        sumRight -= billStack[3]
        leftPart.push(billStack[3])
      }

      for (a = Math.floor(sumRight / billStack[4]); a > 0; a--) {
        sumRight -= billStack[4]
        leftPart.push(billStack[4])
      }

      for (a = Math.floor(sumRight / billStack[5]); a > 0; a--) {
        sumRight -= billStack[5]
        leftPart.push(billStack[5])
      }

      for (a = Math.floor(sumRight / billStack[6]); a > 0; a--) {
        sumRight -= billStack[6]
        leftPart.push(billStack[6])
      }

      for (a = Math.floor(sumRight / billStack[7]); a > 0; a--) {
        sumRight -= billStack[7]
        leftPart.push(billStack[7])
      }
      changeVariants.push(leftPart)
    }

    if (lastArray[findPoint - 1] === 100) {
      for (a = Math.floor(sumRight / billStack[2]); a > 0; a--) {
        sumRight -= billStack[2]
        leftPart.push(billStack[2])
      }

      for (a = Math.floor(sumRight / billStack[3]); a > 0; a--) {
        sumRight -= billStack[3]
        leftPart.push(billStack[3])
      }

      for (a = Math.floor(sumRight / billStack[4]); a > 0; a--) {
        sumRight -= billStack[4]
        leftPart.push(billStack[4])
      }

      for (a = Math.floor(sumRight / billStack[5]); a > 0; a--) {
        sumRight -= billStack[5]
        leftPart.push(billStack[5])
      }

      for (a = Math.floor(sumRight / billStack[6]); a > 0; a--) {
        sumRight -= billStack[6]
        leftPart.push(billStack[6])
      }

      for (a = Math.floor(sumRight / billStack[7]); a > 0; a--) {
        sumRight -= billStack[7]
        leftPart.push(billStack[7])
      }
      changeVariants.push(leftPart)
    }

    if (lastArray[findPoint - 1] === 200) {
      for (a = Math.floor(sumRight / billStack[1]); a > 0; a--) {
        sumRight -= billStack[1]
        leftPart.push(billStack[1])
      }

      for (a = Math.floor(sumRight / billStack[2]); a > 0; a--) {
        sumRight -= billStack[2]
        leftPart.push(billStack[2])
      }

      for (a = Math.floor(sumRight / billStack[3]); a > 0; a--) {
        sumRight -= billStack[3]
        leftPart.push(billStack[3])
      }

      for (a = Math.floor(sumRight / billStack[4]); a > 0; a--) {
        sumRight -= billStack[4]
        leftPart.push(billStack[4])
      }

      for (a = Math.floor(sumRight / billStack[5]); a > 0; a--) {
        sumRight -= billStack[5]
        leftPart.push(billStack[5])
      }

      for (a = Math.floor(sumRight / billStack[6]); a > 0; a--) {
        sumRight -= billStack[6]
        leftPart.push(billStack[6])
      }

      for (a = Math.floor(sumRight / billStack[7]); a > 0; a--) {
        sumRight -= billStack[7]
        leftPart.push(billStack[7])
      }
      changeVariants.push(leftPart)
    }
  }
  console.log(changeVariants)
}

cash(36, 200)
