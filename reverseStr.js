function reverseString(str) {
  //I'll  not change the return type instead I will use a new variable which
  // an array.
  let arr = str.split("").reverse().join("");
  str = arr.toString(); // this overwrites str variable 
  return str; //wink wink!
}
reverseString("hello");
