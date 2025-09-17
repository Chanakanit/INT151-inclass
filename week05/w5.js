// 006 เธอฟ้อนเอน ผมฟ้อนรำ
function getPassNames(arr) {
  return arr.filter((op) => op.score > 70).map((s) => s.name.toUpperCase());
}

const studentScores = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 55 },
  { name: "Eve", score: 78 },
];

const passingNames = getPassNames(studentScores);
console.log(passingNames);

console.log(Array.isArray([]));
console.log(Array.isArray(["a", 12, false]));
console.log(Array.isArray([new Array(2)]));
//--------------------
console.log(Array.isArray("[]"));
console.log(Array.isArray(123));
console.log(Array.isArray(false));
console.log(Array.isArray("1"));
console.log(Array.isArray({}));

console.log("----------------");
const num1 = [1, 2, 3];
const num2 = [3, 5, 7];
console.log([...num1, ...num2]); //spread
console.log(num1.concat(num2)); //concat

console.log(num1.toString()); //convert array to string data type
console.log(num1.toString());
console.log(num1.join(".")); //array to string with separator
console.log(num1.join(","));
console.log(num1.join(":"));
console.log(num1.join(" "));

console.log("---------------");

console.log("mangoteen".includes("go"));
console.log(["mangoteen", "mango"].includes("go"));
console.log("---------------");

let arr1 = ["a", "b", "c"];
let a = arr1.slice().reverse();
console.log(arr1);

const array14 = [1, 30, 4, 21, 1000000];
array14.sort((a, b) => b - a);
console.log(array14);
console.log("---------------");

let students = [
  { id: 66500102, name: "Suda", gpa: 2.5 },
  { id: 66500555, name: "ada", gpa: 2.8 },
  { id: 66500589, name: "pornchai", gpa: 3.25 },
  { id: 66500102, name: "Pornsak", gpa: 3.8 },
]

console.log(students.sort((a,b) => a.name.localeCompare(b.name)));