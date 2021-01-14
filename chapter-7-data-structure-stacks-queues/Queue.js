class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    };
};

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    };

    peek() {

        console.log("peek:", this.first);
        return this.first;
    };

    enqueue(value){
        const newNode = new Node(value);

        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;

        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;
        console.log("enqueue-list:", JSON.stringify(this, null, 4));
        // console.log("equal:", this);

        return this;
    };

    dequeue(){
        if (!this.first) {
            console.log(this);
            return null;
        };

        if (this.first === this.last) {
            this.last = null;
        };

        const holdingPointer = this.first;
        this.first = this.first.next;
        this.length--;
        console.log("dequeue-list:", this);
        console.log("holdingPointer:", holdingPointer);

        return this;

    };

    //isEmpty;
};

const myQueue = new Queue();

myQueue.peek();

myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");

myQueue.peek();

myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();

myQueue.peek();
