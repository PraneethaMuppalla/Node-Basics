// map question
const array = ["apple", "oranges", " ", "mango", " ", "lemon"];
const modifiedArray = array.map((each) => {
  if (each == " ") {
    return "empty string";
  } else {
    return each;
  }
});
console.log(modifiedArray);
console.log(array);

// spread operator - creates a new object or array and pulls the elements out of the orginal array or object
// it does not point to the same orginal object or array
const obj1 = { key1: 1 };
const obj2 = { ...obj1 };
if (obj2 === obj1) {
  console.log("same objects");
} else {
  console.log("different objects");
}

// another example of spread operator
const obj3 = { key1: 1, key2: 2 };
const obj4 = { ...obj3, key1: 1000 };
console.log(obj3);
console.log(obj4);
