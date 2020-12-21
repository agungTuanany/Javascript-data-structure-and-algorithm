"strict mode"
// ---------------------------------------------
// | --- Linked List  Exercise 1 | Pointer --- |
// ---------------------------------------------

let obj1 = {a: true}
let obj2 = obj1


// console.log("obj1", obj1)
console.log("obj2", obj2)

obj1.a = "booya"
delete obj1;

// obj2 = "hello"
console.log("")

console.log("obj1", obj1)
console.log("obj2", obj2)
console.log("")

obj2 = "hello"
console.log("obj1", obj1)
console.log("obj2", obj2)
