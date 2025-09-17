function calculateTotalPage(items, itemsPerPage) {
    if (itemsPerPage <= 0 || items <= 0){
        throw new Error("items per page must be greater than zoro")
    }
    return Math.ceil(items / itemsPerPage)
}
 
 
const obj = {name: "big", about: {
    yaer: 2005,
    men: true,
    money: null,
    age(yearBorn) {
        let curYear = 2568
        return curYear - yearBorn
    }
}}
console.log(obj.about.age(2548))
for (let i in obj){
    console.log(i, obj[i]);
}
 
//เธอฟ้อนเอน ผมฟ้อนรำ - 006
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("toyota", 2019);
 
 
 
 
 
const person = {
  firstName: "John",
  lastName: "Doe"
};
 
 
const man = Object.create(person);
man.firstName = "big"
man.jeaw = 56;
 
console.log(man.jeaw);
 
function dosomting(obj) {
    obj = {id: 1, name: "ih" }
    obj.name = 'xxx'
}
 
const pet = {
    id: 1,
    name: "yoyo"
}
 
console.log(pet.name)
dosomting(pet)
console.log(pet.name)
 
console.log("----------------------");
 
const std1 = { id: 1, name: "Somchai" }
const std2 = { id: 1, name: "somchai" }
 
function sameStd(std1, std2){
    let uppercase1 = std1.name.toUpperCase()
    let uppercase2 = std2.name.toUpperCase()
    if (std1.id === std2.id && uppercase1 === uppercase2){
        return "same"
    } else{
        return 'not same'
    }
}
 
console.log(sameStd(std1, std2));
 
 
const std5 = {id: 1, name: "somechai", adress: {no:111, city: "Bankok"}}
let {id, adress:{city: myadress}} = std5
console.log(myadress)