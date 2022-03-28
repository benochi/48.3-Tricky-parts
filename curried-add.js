function curriedAdd(total) {
  if (total === undefined) return 0;
  //closure
  return function allNum(num){
    if(num === undefined) return total;
    total += num
    return allNum;
  }
}

module.exports = { curriedAdd };
