"strict mode"
// ---------------------------------------------
// | --- Linked List  Exercise 1 | Pointer --- |
// ---------------------------------------------

let obj1 = {a: true}
let obj2 = obj1

// console.log("obj1", obj1)       // [A]
// console.log("obj2", obj2)       // [B]

// Result:
// [A]: obj1 { a: true  }
// [B]: obj2 { a: true  }

obj1.a = "booya"
// console.log("obj1", obj1)       // [C]
// console.log("obj2", obj2)       // [D]

// Result:
// [C]: obj1 { a: 'booya'  }
// [D]: obj2 { a: 'booya'  }

delete obj1
// console.log("obj1", obj1)       // [F]
// console.log("obj2", obj2)       // [G]

// Result:
// [F]: obj1 { a: 'booya'  }
// [G]: obj2 { a: 'booya'  }

obj2 = "hello"
// console.log("obj1", obj1)       // [H]
// console.log("obj2", obj2)       // [I]

// Result:
// [H]: obj1 { a: 'booya'  }
// [G]: obj2 hello

// -----------------------------------------------------------
// | --- Linked List  Exercise 2 | Our first Linked List --- |
// -----------------------------------------------------------

class Linkedlist {

    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1
    };

    append(value) {

        const newNode = {
            value: value,
            next: null
        }

        // console.log("==> newNode", newNode);

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        // console.log("====>", this.head.next);
        return this;
    }

    prepend(value) {

        const newNode = {
            value: value,
            next: null
        };

        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        return this;
    };

    printList() {
        const array = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        };

        console.log(array);
        return array;
    };

    insert(index, value) {
        // check params
        if (index >= this.length) {
            this.append(value);

            return this.printList();
        };

        if (index === 0) {
            this.prepend(value);

            return this.printList();
        }

        const newNode = {
            value: value,
            next: null
        };

        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;

        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;

        return this.printList();

    };

    traverseToIndex(index) {
        // check params
        // ....

        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next;

            counter++;
        };

        return currentNode;
    };

    remove(index) {
        // Check Parameters
        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next;

        leader.next = unwantedNode.next;
        this.length--;

        return this.printList();
    };

};

const myLinkedList = new Linkedlist(10)

// console.log(myLinkedList)

myLinkedList.append(5)
console.log(myLinkedList)

myLinkedList.append(16)
console.log("==>[16]", JSON.stringify(myLinkedList, null, 4))

// myLinkedList.append(29)
// console.log("==>{29}", JSON.stringify(myLinkedList, null, 4))

myLinkedList.prepend(1);
console.log(myLinkedList)
console.log("==>{1}", JSON.stringify(myLinkedList, null, 4))

myLinkedList.printList()

myLinkedList.insert(200, 98)

myLinkedList.insert(2, 99)
myLinkedList.insert(20, 79)

myLinkedList.remove(2)
