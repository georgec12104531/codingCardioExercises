let matrix = 
[[5, 0, 4, 0, 1],
 [0, 0, 4, 0, 0],
 [0, 2, 5, 1, 1],
 [0, 1, 0, 0, 2],
 [1, 1, 3, 4, 5]]

const isEven = (num) => {
    return num % 2 === 0
}

const findMids = (matrix) => {
  const rowLength = matrix[0].length;
  const columnLength = matrix.length; 

  const rowMid = Math.floor(rowLength / 2);
  const columnMid = Math.floor(columnLength / 2);

  let rowMids = [];
  let columnMids = [];

  rowMids = isEven(rowLength) ? [rowMid, rowMid - 1] : [rowMid];
  columnMids = isEven(columnLength) ? [columnMid, columnMid - 1] : [columnMid];

  return [rowMids, columnMids]
}

const findLargestMid = (arr, matrix) => {
  let mostCarrots = null;
  let patchIndex = [null, null]

  arr[0].forEach(el => {
    arr[1].forEach(el2 => {
      if (matrix[el][el2] > mostCarrots) {
        patchIndex = [el, el2];
      }
    })
  })

  return patchIndex;
}

const areEmptyPatchesAround = (matrix, pos) => {
  const up = [pos[0] - 1, pos[1]]
  const down = [pos[0] + 1, pos[1]]
  const left = [pos[0], pos[1] - 1]
  const right = [pos[0], pos[1] + 1]

  return [up, down, left, right].every(coord => {
    if (matrix[coord[0]] === undefined || matrix[coord[1]] === undefined) return true

    return matrix[coord[0]][coord[1]] === 0
  })
}

// console.log(areEmptyPatchesAround(matrix, [2, 2]))

const findNextLargestPatch = (matrix, pos) => {

  // console.log(matrix[pos[0]][pos[1]], 'current')
  const up = [pos[0] - 1, pos[1]];
  const down = [pos[0] + 1, pos[1]];
  const left = [pos[0], pos[1] - 1];
  const right = [pos[0], pos[1] + 1];

  let largestPatch = 0;
  let largestPatchIndex = [0, 0];
  
  let coords = [up, down, left, right]

  // console.log(matrix[largestPatchIndex[0]][largestPatchIndex[1]])
  for (let i = 0; i < coords.length; i++) {
    if (matrix[coords[i][0]][coords[i][1]] > largestPatch) {
      largestPatch = matrix[coords[i][0]][coords[i][1]];
      largestPatchIndex = coords[i]
    }
  }

  return largestPatchIndex
} 


const hungryHedgeHodge = (matrix) => {
  const mids = findMids(matrix);
  const midsIndex = findLargestMid(mids, matrix);
  
  let startingRow = midsIndex[0];
  let startingColumn = midsIndex[1];
  let currentPatch = matrix[startingRow][startingColumn];
  let totalCarrots = 0

  while (startingRow >= 0 && startingColumn <= matrix.length - 1 && areEmptyPatchesAround(matrix, [startingRow, startingColumn]) === false) {
    totalCarrots += matrix[startingRow][startingColumn]
    matrix[startingRow][startingColumn] = 0;
    startingRow = findNextLargestPatch(matrix, [startingRow, startingColumn])[0];
    startingColumn = findNextLargestPatch(matrix, [startingRow, startingColumn])[1];
    
    console.log([startingRow, startingColumn], 'index')
    console.log(totalCarrots, 'total carrots')
    console.log(matrix,'_______________________')
  }

  return totalCarrots;
}

console.log(hungryHedgeHodge(matrix))


