const nemo = ["nemo"];

const everyone1 = ["dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel", "squirt", "darla", "hank"]
const everyone2 = ["dory", "bruce", "marlin", "gill", "bloat", "nigel", "squirt", "darla", "hank", "nemo"]
const everyone3 = ["nemo", "dory", "bruce", "marlin", "gill", "bloat", "nigel", "squirt", "darla", "hank"]

const largeArray = new Array(100000).fill("nemo")

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        console.log("running")
        if (array[i] === "nemo") {
            console.log(`We found ${array[i]} at index "${array.indexOf("nemo")}"`)

            break;
        };
    };
};

// findNemo(nemo);
// findNemo(everyone1);

const measureTime = (array) => {

    const start = new Date();
    const hrstart = process.hrtime()
    const end = new Date() - start;
    const hrend = process.hrtime(hrstart);

    findNemo(array);

    console.info("Execution time: %dms", end);
    console.info("Execution time (hr): %ds %dms", hrend[0], hrend[1]/1000000);
};

// measureTime(everyone2);


const boxes = [1, 2, 3, ,4, 5, 6];

function logFirstTwoBoxes(boxes) {
    console.log(boxes[0])
    console.log(boxes[1])
}

// logFirstTwoBoxes(boxes);

// Big-O Exercise - 1
// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10;                                       // 0(1)

  a = 50 + 3;                                       // 0(1)

    for (let i = 0; i < input.length; i++) {        // O(n)
        anotherFunction();                          // O(n)
        let stranger = true;                        // O(1)
        a++;                                        // O(n)

    };
      return a;                                     // O(1)

    // Answer
    // 3 + n + n + n === 3 + 4n
    // Big-O (3 + 4n)
    // Big- O(n)
};

// funChallenge(2);

// Big-O Exercise - 1
// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
    let a = 5;                              // O(1)
    let b = 10;                             // O(1)
    let c = 50;                             // O(1)

    for (let i = 0; i < input; i++) {
        let x = i + 1;                      // O(n)
        let y = i + 2;                      // O(n)
        let z = i + 3;                      // O(n)
        console.log(x, y, z)
    };

    for (let j = 0; j < input; j++) {
        let p = j * 2;                      // O(n)
        let q = j * 2;                      // O(n)
        console.log(p, q)
    };
    let whoAmI = "I don't know";            // O(1)

    // Answer
    // 4 + n + n + n + n + n
    // Big-O (4 + 5n)
    // Big- O(n)

    // Or if we include for-loop
    // 4 + n + n + n + n + n + n + n === 4 + 7n
    // Big-O (4 + 7n)
    // Big-O: O(n)
}

// anotherFunChallenge(3)


function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);                              // O(1)

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]);                      // O(n/2)
        index++;
    };

    for (var i = 0; i < 100; i++) {
        console.log('hi');                              // )(100)
    };

}; // O(n/2 + 101)

// printFirstItemThenFirstHalfThenSayHi100Times(5)

function compressBoxesTwice(boxes) {
    boxes.forEach(function(boxes) {
        console.log(boxes);                 // O(n)
    })

    boxes.forEach(function(boxes) {
        console.log(boxes);                 // O(n)
    })
} // O(2n)


// Function mutated
function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(function(boxes) {
        console.log(boxes);                 // O(n)
    })

    boxes2.forEach(function(boxes) {
        console.log(boxes);                 // O(n)
    })
}; // Big-O: O(a + b)
