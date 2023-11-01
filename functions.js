//////////////////////////////////////////////////////////////////////////* Exercise 1 */

// Var 1
function areNumbersConsecutive1(arr) {
  if (arr.length < 2) {
    return false
  }

  let min = Math.min(...arr)
  let max = Math.max(...arr)
  if (max - min !== arr.length - 1) {
    return false
  }

  const seen = new Set()

  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i]) || arr[i] < min || arr[i] > max) {
      return false
    }
    seen.add(arr[i])
  }

  return true
}

// Var 2
function areNumbersConsecutive2(arr) {
  if (arr.length < 2) {
    return false
  }

  arr.sort((a, b) => a - b)

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return false
    }
  }

  return true
}

const array1 = [5, 2, 3, 1, 4]
const array2 = [34, 23, 52, 12, 3]
const array3 = [7, 6, 5, 5, 3, 4]


console.log(areNumbersConsecutive1(array1)) // true
console.log(areNumbersConsecutive1(array2)) // false
console.log(areNumbersConsecutive1(array3)) // false
console.log(areNumbersConsecutive2(array1)) // true
console.log(areNumbersConsecutive2(array2)) // false
console.log(areNumbersConsecutive2(array3)) // false


//////////////////////////////////////////////////////////////////////////* Exercise 2 */

// Var 1
function uniqueElements1(arr) {
  const uniqueSet = new Set(arr)
  const uniqueArray = Array.from(uniqueSet).sort((a, b) => a - b)

  return uniqueArray
}

// Var 2
function bubbleSort(arr) {
  let swapped
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Elements swap
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped)

  return arr
}

function uniqueElements2(arr) {
  const sortedArr = bubbleSort(arr)
  const uniqueSet = new Set(sortedArr)
  const uniqueArray = Array.from(uniqueSet)

  return uniqueArray
}

const inputArray1 = [1, 3, 2, 2, 4, 3, 5, 6, 5]
const inputArray2 = [9, 9, 9, 9, 9]
const inputArray3 = [1, 2, 3, 4, 5]

console.log(uniqueElements1(inputArray1))
console.log(uniqueElements1(inputArray2))
console.log(uniqueElements1(inputArray3))
console.log(uniqueElements2(inputArray1))
console.log(uniqueElements2(inputArray2))
console.log(uniqueElements2(inputArray3))


//////////////////////////////////////////////////////////////////////////* Exercise 3 */

// Var 1
function countOccurrences1(arr) {
  const occurrenceCount = {}

  arr.forEach((number) => {
    if (occurrenceCount[number]) {
      occurrenceCount[number]++
    } else {
      occurrenceCount[number] = 1
    }
  })

  const result = Object.keys(occurrenceCount).map((key) => ({
    [key]: occurrenceCount[key],
  }))

  return result
}

// Var 2
function countOccurrences2(arr) {
  const occurrenceCount = arr
      .map(name => { return {count: 1, name: name}})
      .reduce((a, b) => {
        a[b.name] = (a[b.name] || 0) + b.count
        return a
      }, {})

  const result = Object.keys(occurrenceCount).map((key) => ({
    [key]: occurrenceCount[key]
  }))

  return result
}

// Var 3
function countOccurrences3(arr) {
  const occurrenceCount = arr.reduce((acc, name) => {
    acc[name] = (acc[name] || 0) + 1
    return acc
  }, {})

  const result = Object.keys(occurrenceCount).map(key => ({
    [key]: occurrenceCount[key]
  }))

  return result
}

const inputArray = [1, 3, 2, 2, 4, 3, 5, 6 ,5];

console.log(countOccurrences1(inputArray));
console.log(countOccurrences2(inputArray));
console.log(countOccurrences3(inputArray));