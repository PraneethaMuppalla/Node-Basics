// map question
const array = ["apple", "oranges", " ", "mango", " ", "lemon"];
const modifiedArray = array.map((each) => {
  if (each == " ") {
    return "empty string";
  } else {
    return each;
  }
});
console.log(modifiedArray); //[ 'apple','oranges','empty string','mango','empty string','lemon']
console.log(array); //[ 'apple', 'oranges', ' ', 'mango', ' ', 'lemon' ]

// spread operator - creates a new object or array and pulls the elements out of the orginal array or object
// it does not point to the same orginal object or array
const obj1 = { key1: 1 };
const obj2 = { ...obj1 };
if (obj2 === obj1) {
  console.log("same objects");
} else {
  console.log("different objects"); // this is the answer since spread operator creates a new copy
}

// another example of spread operator
const obj3 = { key1: 1, key2: 2 };
const obj4 = { ...obj3, key1: 1000 };
console.log(obj3); //{ key1: 1, key2: 2 }
console.log(obj4); //{ key1: 1000, key2: 2 }

//destructuring assignment
//destructuring allows us to extract values from arrays or properties from objects and assign them to variables
const obj6 = { key3: 1, key4: 2, key5: 1000 };

const { key3, key5 } = { ...obj6 };
console.log(key3, key5); // ans : 1 1000

//another example
const arr1 = ["value1", "value2"];
const [val1, val2] = arr1;
console.log(val1); // value1
console.log(val2); // value2

//another example
const obj7 = { key6: 1, key7: 2, key8: 1000 };
let { key6, key7 } = obj7;
key6 = 20;
key7 = 123;
console.log(obj7.key6, obj7.key7); // ans 1 2 they will not be changed
