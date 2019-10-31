function deep (arr) {
  let start
  let end
  let arrayStart
  let arrayEnd
  let water
  let aCounter
  let bCounter
  let iCounter
  let amount = 0

  for (bCounter = 0; bCounter < arr.length; bCounter++) {
    start = arr[0]

    for (iCounter = 0; iCounter < arr.length; iCounter++) {
      if (arr[iCounter] >= start) {
        start = arr[iCounter]
        arrayStart = iCounter
      } else {
        end = arr[iCounter]
        iCounter++
        break
      }
    }

    while (iCounter < arr.length) {
      if (arr[iCounter] >= start) {
        end = arr[iCounter]
        arrayEnd = iCounter
        break
      }
      iCounter++
    }

    if (start > end) {
      arr.reverse()
    } else {
      water = arr.slice(arrayStart, arrayEnd + 1).sort((a, b) => b - a)
      if (++iCounter === arr.length) {
        arr.splice(0, arr.length - 1)
      } else {
        arr.splice(0, arrayEnd)
      }

      for (aCounter = 2; aCounter < water.length; aCounter++) {
        amount += water[1] - water[aCounter]
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
