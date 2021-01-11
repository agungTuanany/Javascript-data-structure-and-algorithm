class AbstractLinkedList {

    constructor(value) {
        this.head = {
            value: value,
            prev: null,
            next: null,
        };

        // console.log("AbstractLinkedList")
        this.tail = this.head;
        this.length = 1;

        this.newNode = {
            value: value,
            next: null,
            prev: null
        };

        // this.printList()
    };

    append(value) {
        this.newNode = {
            value: value,
            prev: null,
            next: null
        };

        this.tail.next = this.newNode;
        this.tail = this.newNode;
        this.length++;

        console.log("append method from abstarct class:", this);
        this.printList();
        return this;
    };

    prepend(value) {

        this.newNode = {
            value: value,
            prev: null,
            next: null
        };

        this.newNode.next = this.head;
        this.head.prev = this.newNode;
        this.head = this.newNode;
        this.length++;

        console.log("prepend from abstract class:", this);
        this.printList();
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
};


export default  AbstractLinkedList;
