import AbstractLinkedList from "./abstract-linked-list.js"

class DoublyLinkedList extends AbstractLinkedList {

    constructor(value) {

        super();

        this.head = {
            value: value,
            prev : null,
            next : null
        }
        this.tail = this.head;
        this.newNode = {
            value: value,
            next: null,
            prev: null
        };

        console.log("constructor method from DoublyLinkedList:",this.length);
        this.printList();
    }


}

const myDoublyLinkedList = new DoublyLinkedList(83);

myDoublyLinkedList.append(38);
myDoublyLinkedList.append(89);

myDoublyLinkedList.prepend(63);
