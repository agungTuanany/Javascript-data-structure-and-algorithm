
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

//console.log(resultSpanish)

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


// ==================================================
// ========== Bubble Sort ===========================
// ==================================================

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    const length = array.length;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {

            if(array[j] > array[j+1]) {
                // Swap numbers
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            };
        };
    };
};

//bubbleSort(numbers);
//console.log(numbers);


// ==================================================
// ========== Selection Sort ========================
// ==================================================

const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    const length = array.length;
    for(let i = 0; i < length; i++){
        // set current index as minimum
        let min = i;
        let temp = array[i];
        for(let j = i+1; j < length; j++){
            if (array[j] < array[min]){
                //update minimum if current is lower that what we had previously
                min = j;
            }
        }
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}

selectionSort(numbers2);
console.log(numbers2);
