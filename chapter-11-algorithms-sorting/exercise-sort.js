
// ==================================================
// ========== Example 1 =============================
// ==================================================
const letters = ["a", "d", "z", "e", "r", "b"];
const basket = [2, 65, 34, 2, 1, 7, 8];

const resultLetters = letters.sort();
const resultBasket = basket.sort();

// console.log(resultLetters)
// console.log(resultBasket)

// ==================================================
// ========== Example 2 =============================
// ==================================================

const charAt65 = "65".charCodeAt(0);
const charAt2 = "2".charCodeAt(0);
const charAt34 = "34".charCodeAt(0);
const charAt7 = "7".charCodeAt(0);

//console.log(charAt65)
//console.log(charAt2)
//console.log(charAt34)
//console.log(charAt7)

// ==================================================
// ========== Example 3 =============================
// ==================================================

const spanish = ["unico", "árbol", "cosas", "fútbol"];
const resultSpanish = spanish.sort();

console.log(resultSpanish)

const localCompare = spanish.sort(function(a, b) {
    return a.localeCompare(b);
});

//console.log(localCompare)

// ==================================================
// ========== Example 4 =============================
// ==================================================

const resovleBasket = basket.sort(function(a, b) {
    return a-b;
});

//console.log(resovleBasket)

