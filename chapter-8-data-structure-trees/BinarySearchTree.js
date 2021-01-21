class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    };
};

class BinarySearchTree {
    constructor() {
        this.root = null;
    };

    insert(value) {
        // Code here
    };

    lookup(value) {
        // Code here
    };

    // remove(value) {
        // Code here
    // }
};

//               9
//
//        4             20
//
//     1     6     15        170

function traverse(node) {
    const tree = { value: node.value };

    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? traverse.(node.rigth);
    console.log(tree)

    return tree;
};
