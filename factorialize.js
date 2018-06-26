function factorialize(num) {
  // factorial by recursion using tertiary operator
  // bernouli's trial
  return (num == 0) ? 1 : num * factorialize(num - 1);
}
factorialize(5);
