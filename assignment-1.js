function fibs(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    i === 0
      ? arr.push(0)
      : i === 1 || i === 2
        ? arr.push(1)
        : arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return arr;
}

function fibsRec(start, num) {
  return start < num
    ? [fibs(start + 1)[fibs(start + 1).length - 1]].concat(
      fibsRec(start + 1, num),
    )
    : [];
}
