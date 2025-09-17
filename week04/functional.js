const employees = [
  {
    id: "e1001",
    firstname: "Somchai",
    lastname: "Jaidee",
  },
  {
    id: "e1002",
    firstname: "Pornchai",
    lastname: "Deejai",
  },
  {
    id: "e1005",
    firstname: "Suda",
    lastname: "Rakdee",
  },
];

const result = employees
  .map((emp) => `${emp.firstname.toUpperCase()} ${emp.lastname.toUpperCase()}`)
  .filter((emp) => emp.includes("JAI"));
// console.log(result);

const carts = [
  { productId: 1002, price: 10, amount: 5 },
  { productId: 2005, price: 100, amount: 2 },
  { productId: 5001, price: 5, amount: 4 },
];

let calCart = carts.reduce((acc, cur) => {
  return acc + cur.price * cur.amount * 1.07;
}, 0);
// console.log(calCart.toFixed(2));

const words = ["apple", "orange", "banana", "mango", "cherry"];
// words.splice(1, 0, "cherry", 'berry');
// console.log(words.findIndex(word => word === 'orange'))
// console.log(words)
// words.splice(2, 1)
// console.log(words)
// words.splice(2,1, "mango")
// console.log(words);
// console.log(words.slice(0, 3));
// console.log(words.slice(-3));

words.fill(undefined, 1, 3)
console.log(words);
