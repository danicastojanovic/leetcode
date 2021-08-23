var myPow = function(x, n) {
  if (n < 0) {
      x = 1 / x;
      n = -n;
  }
  return fastPow(x, n)
};

var fastPow = (x, n) => {
  if (n === 1) {
      return x;
  }
  if (n % 2 === 1) {
    return x * fastPow(x, n - 1);
  }
  return fastPow(x * x, n / 2);
}