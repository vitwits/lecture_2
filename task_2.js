'use strict'

function deep (arr) {
  let start; let end; let arrayStart; let arrayEnd; let water; let amount = 0

  for (let b = 0; b < arr.length; b++) {
    start = arr[0]

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] >= start) {
        start = arr[i]
        arrayStart = i
      } else {
        end = arr[i]
        i++
        break
      }
    }

    for (i; i < arr.length; i++) {
      if (arr[i] >= start) {
        end = arr[i]
        arrayEnd = i
        break
      } else {
        end = arr[i]
      }
    }

    if (start > end) {
      arr.reverse()
    } else {
      water = arr.slice(arrayStart, arrayEnd + 1).sort((a, b) => b - a)
      if (++i === arr.length) {
        arr.splice(0, arr.length - 1)
      } else {
        arr.splice(0, arrayEnd)
      }

      for (let a = 2; a < water.length; a++) {
        amount += water[1] - water[a]
      }
    }
  }
  console.log(amount)
}

deep([2, 5, 1, 3, 1, 2, 1, 7, 7, 6]) // 17
deep([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]) // 10
deep([7, 0, 1, 3, 4, 1, 2, 1]) // 9
deep([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]) // 10
deep([2, 2, 1, 2, 2, 3, 0, 1, 2]) // 4
deep([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8]) // 24
deep([2, 2, 2, 2, 2]) // 0
