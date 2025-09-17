function idGenerator() {
    let id = 0
    return function () {
      id ++
      return id
    }
    
}

let idGen = idGenerator()

console.log(idGen());
console.log(idGen());
console.log(idGen());

console.log("----------------");

function outerFunction(x) {
    return function(y){
        return x + y
    }
}


const addFive = outerFunction(5)
console.log(addFive(3));

const addTen = outerFunction(10)
console.log(addTen(2))
