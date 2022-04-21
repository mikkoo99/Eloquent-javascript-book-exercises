/* exercise01 */
const printTriangle = function (size) {
  let row = '';
  for (let i = 0; i < size; i++) {
    row += '#';
    console.log(row);
  }
};
// printTriangle(7);

/* exercise02 */
const printFizzBuzz = function () {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
};
// printFizzBuzz();

/* exercise03 */
const printChessBoard = function (size) {
  let row1 = '';
  let row2 = '';
  for (let i = 0; i < size / 2; i++) {
    for (let i = 0; i < size / 2; i++) {
      row1 = row1 + '#' + '   ';
      row2 = row2 + '   ' + '#';
    }
    row1 += '\n';
    row2 += '\n';
    console.log(row1);
    console.log(row2);
    row1 = '';
    row2 = '';
  }
};
// printChessBoard(8);
