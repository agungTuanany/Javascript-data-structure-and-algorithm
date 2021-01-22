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

        const newNode = [this.left, this.rigth, this.value ]

        const nodeValue = {
            Left: this.left,
            Right: this.right,
            value: this.value
        };

        console.log("nwNode:", newNode)
        console.log("nodeValue:", nodeValue)
    };
};

class BinarySearchTree {
    constructor() {
        this.root = null;
    };

    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        };

        // console.log(newNode);
        console.log(JSON.stringify(newNode))
    };

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
    tree.right = node.right === null ? null : traverse(node.rigth);
    console.log(tree)

    return tree;
};

const tree = new BinarySearchTree();


tree.insert(9);
tree.insert(4);
tree.insert(6)
tree.insert(20)


