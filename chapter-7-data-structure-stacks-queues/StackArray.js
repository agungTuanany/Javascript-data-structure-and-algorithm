class Stack {
    constructor(){
        this.array = [];
    };
    peek() {
        if (this.array.length === 0)  {
            console.log(this, "you don't have any index of an array")
            return this;
        };
        console.log("Peek:", this);

        return this.array[this.array.length - 1];
    };
    push(value){
        this.array.push(value);
        console.log(this);

        return this;
    };
    pop(){
        this.array.pop();
        console.log(this);

        return this;
    };
}

const myStack = new Stack();
myStack.peek();
myStack.push('google');
myStack.push('Udemy');
myStack.push('Discord');
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();

