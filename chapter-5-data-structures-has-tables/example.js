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
    };

    set(key, value) {

        // Store the key
        let address = this._hash(key);

        if (!this.data[address]) {
            this.data[address] = [];

            // this.data[address].push([key, value]);
           // console.log(this.data)
        };

        this.data[address].push([key, value]);
        console.log("====> --", this.data)

        return this.data;
    };

    get(key) {
        const address = this._hash(key);
        const currentBucket = this.data[address];

        // Check if currentBucket not empty
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {

                if (currentBucket[i][0] === key) {
                    console.log("c-3 shelf's: %d ,key: %s, value: %d", address, currentBucket[i][0], currentBucket[i][1])

                    return currentBucket[i][1]
                };
            };
        };

        return undefined;

    };

};

const myHashTable = new HashTable(2);

myHashTable.set("grapes", 10000)
// myHashTable.get("grapes")
//
// console.log("==============")
// console.log("")
//
myHashTable.set("orange", 2500)
myHashTable.get("orange")
//
// console.log("==============")
// console.log("")
//
// myHashTable.get("papaya")
