function checkPositive(arr) {
  // Add your code below this line
  return arr.some((value) => {
    return value > -1;
  });

  // return arr.every((value)=>
  //return value>-1;
  // });

  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
