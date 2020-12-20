// ---------------------------------
// | --- Exercise 1 Hash table --- |
// ---------------------------------
// Create set() and get() methods to store key value pair, and retrieve a value with hashing.
// The get() also solve collision in hash tables

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    };

   _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        };

        return hash;
    }; // O(1)

    set(key, value) {

        // Store the key
        let address = this._hash(key);

        if (!this.data[address]) {
            this.data[address] = [];
        };

        this.data[address].push([key, value]);
        // console.log("====> B-2", this.data[address])

        return this.data;
    }; // O(1)

    get(key) {
        const address = this._hash(key);
        const currentBucket = this.data[address];

        // Check if currentBucket not empty
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    // console.log("c-3 shelf's: %d ,key: %s, value: %d", address, currentBucket[i][0], currentBucket[i][1])

                    return currentBucket[i][1]
                };
            };
        };

        return undefined;
    }; // O(1) if there's collision it become O(n)

    keys() {
        const keysArray = [];

        // console.log(this.data.length);
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                console.log(this.data[i][0])
                keysArray.push(this.data[i][0][0])
            };
        };

        console.log(keysArray);
        return keysArray;
    }; // O(1)

    values() {
        const valArrays = [];

        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                console.log(this.data[i][0]);
                valArrays.push(this.data[i][0][1]);
            };
        };

        console.log(valArrays);
        return valArrays;
    }; // O(1)
};

const myHashTable = new HashTable(50);

// myHashTable.set("grapes", 10000)
// myHashTable.get("grapes")

// myHashTable.set("apples", 56)
// myHashTable.get("apples")

// myHashTable.set("oranges", 2)
// myHashTable.get("orange")

// console.log("keys")
// myHashTable.keys()
// console.log("========")

// myHashTable.values()


// ------------------------------------------------------------------
// | --- Exercise 2 Hash table | Find First Recurring Character --- |
// ------------------------------------------------------------------

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

const givenArray = [2,5,1,2,3,5,1,2,4]
const givenArray2 = [2,1,1,2,3,5,1,2,4]
const givenArray3 = [2,3,4,5]
const givenArray4 = [2,5,5,2,3,5,1,2,4]

// Naive approach with array
function firstRecurringCharacter(input) {

    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {

                console.log(input[i], input[j])
                return input[i];
            };
        };
    };

    return undefined;
};

// Time Complexity: O(n^2)
// Space Complexity: O(1)

// firstRecurringCharacter(givenArray)

// Better approach with hash table
function firstRecurringCharacter2(input) {

    let hashMap = {};                           // Space Complexity: O(n)

    for (let i = 0; i < input.length; i++) {
        // console.log(hashMap[input[i]])
        if (hashMap[input[i]] !== undefined) {
            return input[i]
        }
        else {
            hashMap[input[i]] = i
        };
        console.log(hashMap)                        // [B]
    };

    console.log(hashMap)
    return undefined;
};

// Time Complexity: O(n)
// Space Complexity: O(n)


// firstRecurringCharacter2(givenArray)


//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

// TODO: fill this blank please
function firstRecurringCharacter3(input) {

}

firstRecurringCharacter3([2,5,5,2,3,5,1,2,4])
