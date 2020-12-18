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

myHashTable.set("grapes", 10000)
// myHashTable.get("grapes")

myHashTable.set("apples", 56)
// myHashTable.get("apples")

myHashTable.set("oranges", 2)
// myHashTable.get("orange")


console.log("keys")
myHashTable.keys()
console.log("========")

myHashTable.values()
