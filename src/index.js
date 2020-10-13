
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let newArr = [];
  if (matrix != undefined) {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 != 0) {
        matrix[i].reverse();
      }
    }
    newArr = matrix.flat();
  }

  return newArr;
}
