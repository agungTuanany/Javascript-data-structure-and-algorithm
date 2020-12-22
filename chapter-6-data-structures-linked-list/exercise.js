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
        // Code here...
    }
}

const myLinkedList = new Linkedlist(10)

// console.log(myLinkedList)

myLinkedList.append(5)
console.log(myLinkedList)

myLinkedList.append(16)
console.log("==>[16]", JSON.stringify(myLinkedList, null, 4))

myLinkedList.append(29)
console.log("==>{29}", JSON.stringify(myLinkedList, null, 4))
