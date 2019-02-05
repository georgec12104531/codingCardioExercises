const findArrLength = (arr) => {
  return findLength(arr, 0, 0)
}

const findLength = (arr, index, length) => {
  if (index === arr.length ) {
    return arr.length > 1 ? length : 0;
  }

  return findLength(arr, index + 1, length + 1)
}

console.log(findArrLength([1, 2, 3, 4]))
