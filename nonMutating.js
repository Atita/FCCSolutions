var globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Add your code below this line
  return arr.concat().sort((a, b) => a > b);

  // Add your code above this line
}
nonMutatingSort(globalArray);
