//A

//1.crate array with many data types
const arr = ["chicken", "แมว", "หมา"];

//2. print array size
console.log(arr.length);

//3. print the first item
console.log(arr[0]);

//4.print the last item
console.log(arr[arr.length - 1]);

//5. add twn more items at the end of array with object
arr.push({ car: "toyota" });
arr.push(["apple", "banana", "orange"]);
console.log(arr);

//A
//6.print ecery items in the array
for (let i of arr) {
  console.log(i);
}

console.log("------------------------");

console.log(arr.length);
arr.pop();
console.log(arr.length);

let ab = "hello world";
const b = [...ab, 1, 2, 3];

console.log(b);

console.log("------------------------");
// new array
const arr1 = new Array(b);
console.log(arr1.length);
const arr2 = new Array(b, 13);
console.log(arr2);

console.log("------------------------");
// array.of

const arr3 = Array.of(10);
console.log(arr3); // [10]

const arr4 = Array.from(arr3);
console.log(arr4); // [10]

console.log(arr);
delete arr[1];
console.log(arr);
console.log(arr.length);

console.log("------------------------");

const [, , a, , ...rest] = [5, 10, 15, 20, 25];
console.log(a);
console.log(typeof a);
console.log(rest);
console.log(typeof rest);
console.log(Array.isArray(rest));

console.log("------------------------");

let letters = [..."Hello world"];
let value = "";
for (let [index, letter] of letters.entries()) {
  if (index % 2 === 0) value += letter; // letters at even indexes
}
console.log(`value: ${value}`); // "Hlowrd"
