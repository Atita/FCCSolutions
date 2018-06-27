function findLongestWordLength(str) {
  str = str.split(" ").reduce((acc, curr) => {
    return (curr.length > acc.length) ? curr : acc;
  });
  return str.length; // consistent with code with restructuring variables
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");
