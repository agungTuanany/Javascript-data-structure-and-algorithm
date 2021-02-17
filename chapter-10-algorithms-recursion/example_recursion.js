let counter = 0;

function inception() {
    if (counter > 3) {
        return "done!";
    }
    counter++;

    inception();
    console.log("hello?");
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

inception();
console.log("================================================");
//inception2();

// console.log("Having some Question")
