import  AbstractLinkedList  from "./abstract-linked-list.js";


class SinglyLinkedList extends AbstractLinkedList {

    constructor(value) {

        super();

        this.head = {
            value: value,
            next: null
        }

        this.tail = this.head;

        // console.log(`===> ${JSON.stringify(this, null, 4)} \n head: ${JSON.stringify(this.head, null, 4)} \n tail: ${JSON.stringify(this.tail, null, 4)}`)
        console.log("constructor method from singlyLinkList:",this)
    };


    append(value) {

        this.newNode = {
            value : value,
            next: null
        }

        this.tail.next = null;
        this.tail = this.newNode;
        this.length++;

        console.log("append method from singlyLinkList:",this)
        // console.log(`===> ${JSON.stringify(this, null, 4)} \n head: ${JSON.stringify(this.head, null, 4)} \n tail: ${JSON.stringify(this.tail, null, 4)}`)
        this.printList()
        return this;
    }

    prepend(value) {

        this.newNode = {
            value: value,
            next: null
        };


        this.newNode.next = this.head;
        this.head = this.newNode;
        this.length++;

        console.log("prepend from singlyLinkList class:", this)
        this.printList()
        return this;
    }
}
export default SinglyLinkedList

const myLinkedList = new SinglyLinkedList(20)

myLinkedList.append(30)
myLinkedList.prepend(55)

// console.log(myLinkedList.append(20))
