/**
 * Question:
 * https://leetcode.com/problems/implement-queue-using-stacks/
 *
 * Answer explanation:
 * https://leetcode.com/problems/implement-queue-using-stacks/discuss/1016521/Two-stack-solution-wvideo-whiteboard-explanation
 */

let MyQueue = function() {
    this.pushStack = new Stack();
    this.popStack = new Stack();
};

MyQueue.prototype.push = function(x) {
    this.pushStack.push(x);
};

MyQueue.prototype.pop = function() {
    if (this.popStack.empty()) {
        while (!this.pushStack.empty()) {
            this.popStack.push(this.pushStack.pop());
        }
    }

    return this.popStack.pop();
};

MyQueue.prototype.peek = function() {
    if (this.popStack.empty()) {
        while (!this.pushStack.empty()) {
            this.popStack.push(this.pushStack.pop());
        }
    }

    return this.popStack.peek();
};

MyQueue.prototype.empty = function() {
    return this.popStack.empty() && this.pushStack.empty();
};


// manually created a stack since javascript doesn't have one built-in
class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(val) {
    this.storage[this.size] = val;
    this.size++;
  }

  pop() {
    let top = this.storage[this.size - 1];
    this.size--;
    delete this.storage[this.size];
    return top;
  }

  peek() {
    return this.storage[this.size - 1];
  }

  empty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}
