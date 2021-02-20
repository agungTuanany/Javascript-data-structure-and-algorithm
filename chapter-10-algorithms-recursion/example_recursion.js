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
// recursive, the other should just use a for loop.

function findFactorialRecursive(number) {

    if (number === 2) {
        return number;
    };

    const answer = number * findFactorialRecursive(number-1);
    console.log(answer);
    return answer;
    ;
};

findFactorialRecursive(5)

function findFactorialIterative(number) {

    let answer = 1;
    if (number === 2) {
        answer = 2;
    };

    for (let i = 2; i <= number; i++) {
        answer = answer * i;
    }

    // code here
    console.log(answer)
    return answer;
}

// findFactorialIterative(5);
// findFactorialRecursive(1)
