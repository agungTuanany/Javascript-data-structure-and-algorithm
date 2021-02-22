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

//findFactorialRecursive(5)

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
//
// ===========================================================================
// ==================== EXERCISE FIBONACCI ===================================
// ===========================================================================

/*
Give a number `N` return the index of the Fibonacci sequence, where the sequence
is:

Fibonacci number     0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
                     ^  ^  ^  ^  ^  ^  ^  ^   ^   ^   ^   ^   ^
                     |  |  |  |  |  |  |  |   |   |   |   |   |
index of             0  1  2  3  4  5  6  7   8   9   10  11  12

The pattern of the sequence is, that each value is the sum of the 2 previous
values. That means, fro 'N=5 --> 2 + 3'.
*/

function fibonacciIterative(n) {
    let arr = [0, 1];

    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i-2] + arr[i-1]);
    };

    return arr[n];
}

fibonacciIterative(3)

function fibonacciRecursive(n) {
    if (n < 2) {
        return n;
    }

    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

//fibonacciRecursive(3)
