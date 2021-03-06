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

//@NOTE: You cannot delete declared variable in JS, with keyword 'var' or 'let' or 'const'
// delete obj1
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
// | --- Singly List  Exercise 2 | Our first Linked List --- |
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
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;

        leader.next = unwantedNode.next;
        this.length--;

        return this.printList();
    };

    reverse() {
        if (!this.head.next){
            return this.head;
        };

        let first = this.head;
        this.tail = this.head;

        let second = first.next;

        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        };

        this.head.next = null;
        this.head = first;

        console.log(this)
        return this.printList();
    };
};

const myLinkedList = new Linkedlist(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.remove(2);
myLinkedList.remove(2);

myLinkedList.reverse()
// console.log(myLinkedList);

// myLinkedList.append(5);
// console.log(myLinkedList);

// myLinkedList.append(16);
// console.log("==>[16]", JSON.stringify(myLinkedList, null, 4));

// myLinkedList.append(29);
// console.log("==>{29}", JSON.stringify(myLinkedList, null, 4));

// myLinkedList.prepend(1);
// console.log(myLinkedList);
// console.log("==>{1}", JSON.stringify(myLinkedList, null, 4));
//
// myLinkedList.printList();
//
// myLinkedList.insert(200, 98):
//
// myLinkedList.insert(2, 99);
// myLinkedList.insert(20, 79);
//
// myLinkedList.remove(2);

// -------------------------------------------
// | --- Doubly linked List  Exercise 2  --- |
// -------------------------------------------


class DoublyNode {

    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;

        // console.log(JSON.stringify(value, null, 4))
    }
}

class DoublyLinkedList {

    constructor(value) {

        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
    };

    append(value) {

        // const newNode = new DoublyNode(value);
        const newNode = {
            value: value,
            prev: null,
            next: null
        };

        // console.log("newNode:", newNode)
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        // console.log("append:", this)
        return this;
    };

    prepend(value) {

        // const newNode = new DoublyNode(value);
        const newNode = {
            value: value,
            next: null,
            prev: null
        };

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;

        console.log("prepend:", this)
        return this;
    };

    printList() {

        const array = [];
        let currentNode = this.head;

        while(currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        };

        console.log(array);
        return array;
    };

    insert(index, value) {
        // Check for proper params
        if (index >= this.length) {
            this.append(value);

            return this.printList();
        };

        if (index === 0) {
            this.prepend(value);

            return this.printlist();
        };

        // const newNode = new DoublyNode();

        const newNode = {
            value: value,
            next: null,
            prev: null
        };
        const leader = this.traverseToIndex(index -1);
        const follower = leader.next;

        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;

        console.log("insert:", this);
        return this.printList()
    };

    traverseToIndex(index) {
        // Check Params
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
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;

        leader.next = unwantedNode.next;
        this.length--;

        return this.printList();
    };

};

// const myDoublyLinkedList = new DoublyLinkedList(10);

// myDoublyLinkedList.append(5)
// myDoublyLinkedList.append(16)


// myDoublyLinkedList.prepend(1)
// myDoublyLinkedList.insert(1, 99)
// myDoublyLinkedList.printList()
