// """"""""""""""""""""""""""""""""""""""""
// Objective Tree that we want to built:

//               9
//
//        4             20
//
//     1     6     15        170
// """"""""""""""""""""""""""""""""""""""""

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;

        // const newNode = [this.left, this.right, this.value ]

        // const nodeValue = {
        //     Left: this.left,
        //     Right: this.right,
        //     value: this.value
        // };

        // const nodeValueJSON = JSON.stringify(nodeValue, null, 4);

        // console.log(nodeValueJSON)
    };
};

class BinarySearchTree {
    constructor() {
        this.root = null;
    };

    insert(value){
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        }
        else {
            let currentNode = this.root;

            while(true){
                if(value < currentNode.value){
                    //Left
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }
                else {
                    //Right
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    };
                    currentNode = currentNode.right;
                };
            };
        };

        // console.log(JSON.stringify(newNode))
    }


    lookup(value) {
        // Code here
    };

    // remove(value) {
    // Code here
    // }
};

function traverse(node) {
    const tree = { value: node.value };

    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    console.log(tree)

    return tree;
};

const tree = new BinarySearchTree();

tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

JSON.stringify(traverse(tree.root))

