/* eslint-disable no-nested-ternary */
// for https://projecteuler.net/problem=1
function sumMultiplesThreeFive(num) {
  const currNum = num - 1;
  return (currNum === 3) ? 3
    : (currNum % 3 === 0 || currNum % 5 === 0)
      ? currNum + sumMultiplesThreeFive(num - 1)
      : 0 + sumMultiplesThreeFive(num - 1);
}
