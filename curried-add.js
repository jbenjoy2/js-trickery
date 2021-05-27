function curriedAdd(total) {
  if (total === undefined) return 0;

  return function sumNums(num) {
    if (num === undefined) return total;
    total += num;
    return sumNums;
  };
}

module.exports = { curriedAdd };
