let counter = 0;

function inception() {
    console.log(counter);

    if (counter > 3) {
        return "done!";
    }
    counter++;

    return inception();
}

// inception();


let counter1 = 0;

function inception2() {
//     if (counter1 > 3) {
//         return "done";
// };
//     counter++;
    inception2();
};

//inception();
//inception2();

// ===========================================================================
// ==================== EXERCISE FACTORIAL ===================================
// ===========================================================================

// Write two functions that find the factorial of any number. One should use
// recursive, the other should just use a for loop

function findFactorialRecursive(number) {
    // code here
    return answer;
}

function findFactorialiterative(number) {
    // code here
    return asnwer;
}
