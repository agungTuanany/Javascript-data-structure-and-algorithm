// ------------------------------------------
// | --- Optional Classes in JavaScript --- |
// ------------------------------------------
class Player {

    constructor(name, type) {
        // console.log("===> Player:", this);                      // [1]
        this.name = name;
        this.type = type;
    };

    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    };
};

class Wizard extends Player {
    constructor(name, type) {
        // console.log("===> Wizard", this);
        super(name, type);
        // console.log("===> Wizard:", this);
    };

    play() {
        console.log(`WEEEE I'm a ${this.type}`);
    };
};

const wizard1 = new Wizard("Shelly", "Healer");
// const wizard2 = new Wizard("Shawn", "Dark Magic");


// wizard1.play()

// wizard1.introduce()
// wizard2.introduce()


class MyArray {
    constructor()  {
        this.length = 0;
        this.data = {};
    };

    get(index) {
        return this.data[index];
    };

    push(item) {
        this.data[this.length] = item;
        this.length++;

        return this.length;
    };

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;

        return lastItem;
    };

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);

        // return item;
    };

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        };

        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new MyArray()
newArray.push("hi")


// console.log(newArray)
// // console.log(newArray.get(0))

// newArray.push("you")
// console.log(newArray)

// newArray.push("!")
// console.log(newArray)


// newArray.delete(1)
// console.log(newArray)

// newArray.pop();
// console.log(newArray)

// newArray.pop();
// console.log(newArray)


// --------------------------------------
// | --- Exercise Reverse A Strings --- |
// --------------------------------------
// Create a function that reverse a string.
// "Hi My name is Andrei" should be:
// "ierdnA si eman yM iH"

function reverseString(str) {

    // split the string and reverse and join it.
    const reversed = str.split("").reverse().join("")

    console.log(str)
    console.log("==> result:", reversed)
    return reversed;
}

function reverseString2(str) {
    // Check input
    if (!string || str.length < 2 || typeof str !== "string") {
        return console.log("Your input is not a string or the string length less then 2 characters");
    };

    const backwards = [];
    const totalItems = str.length - 1;

    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    };
    console.log(backwards);

    const reverseBackward = backwards.join("");
    console.log(reverseBackward);

    return reverseBackward;
}

const string = "Hi My name is Andrei"
// reverseString(string);

const reverseString3 = str => str.split("").reverse().join("");
// console.log(reverseString3(string))

const reverseString4 = str => [...str].reverse().join("");


// ----------------------------------------
// | --- Exercise Merge Sorted Arrays --- |
// ----------------------------------------
// given two arrays that are sorted, can you merge these two arrays into one big
// one? That's still sorted.

const array1 = [0, 3, 4, 31];
const array2 = [4, 6, 30]

// This is my own answer before I go through lookup the answer
function mergeSortedArrays2(arr1, arr2) {

    // merge the arrays into new arrays
    let newArray = []
    newArray.push(...arr1, ...arr2)

    newArray.sort(function(a, b) {
        if(a > b) {

            return 1;
        };
        if(a < b) {
            return -1;
        };
        return 0;
    });
    // console.log(newArray);

    // ES6
    newArray.sort((a, b) => {
         a - b

        // console.log("es6 ===>: ",newArray)
        return
    });

}

// mergeSortedArrays(array1, array2)

// This is the answer from Andrei
function mergeSortedArrays(array1, array2){

    // Check Input
    if(array1.length === 0) {
        return array2;
    };

    if(array2.length === 0) {
        return array1;
    };

    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;


    while (array1Item || array2Item) {
        console.log("===> Debug:", array1Item, array2Item)
        if(array2Item === undefined || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        }
        else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }

    console.log("===>", mergedArray);
    return mergedArray;

}

mergeSortedArrays(array1, array2);
